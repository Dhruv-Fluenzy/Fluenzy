import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { workVideos } from "../constants"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<typeof workVideos[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videosPerPage = 3

  const totalPages = Math.ceil(workVideos.length / videosPerPage)

  const handleVideoClick = (video: typeof workVideos[0]) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }
  
  const currentVideos = workVideos.slice(
    currentIndex * videosPerPage,
    (currentIndex + 1) * videosPerPage
  )

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-card shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 group"
        aria-label="Previous videos"
      >
        <ChevronLeft className="size-5 text-foreground group-hover:text-primary transition-colors duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-card shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 group"
        aria-label="Next videos"
      >
        <ChevronRight className="size-5 text-foreground group-hover:text-primary transition-colors duration-300" />
      </button>

      {/* Video Cards Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >            {currentVideos.map((video, index) => (              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
                category={video.category}
                brand={video.brand}
                duration={video.duration}
                delay={0.1 * index}
                onClick={() => handleVideoClick(video)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
          brand={selectedVideo.brand}
          category={selectedVideo.category}
        />
      )}
    </div>
  )
}

export default VideoCarousel
