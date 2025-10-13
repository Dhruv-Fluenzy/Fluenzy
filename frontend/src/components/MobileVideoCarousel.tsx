import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { workVideos } from "../constants"
import InstagramLikeVideoCard from "./InstagramLikeVideoCard"

const MobileVideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  // Auto-advance slides every 4 seconds when auto-playing
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % workVideos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workVideos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workVideos.length) % workVideos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }
  return (
    <div className="relative w-full max-w-sm mx-auto">      {/* Mobile Story-like Container */}
      <div 
        className="relative bg-black rounded-2xl overflow-hidden shadow-2xl" 
        style={{ aspectRatio: '9/16' }}
      >
        {/* Progress Bars */}
        <div className="absolute top-2 left-2 right-2 z-20 flex gap-1">
          {workVideos.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: index < currentIndex ? "100%" : "0%" }}
                animate={{ 
                  width: index < currentIndex ? "100%" : 
                         index === currentIndex && isAutoPlaying ? "100%" : "0%" 
                }}
                transition={{ 
                  duration: index === currentIndex && isAutoPlaying ? 4 : 0,
                  ease: "linear"
                }}
              />
            </div>
          ))}
        </div>        {/* Auto-play Toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full"
        >
          {isAutoPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>

        {/* Video Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <InstagramLikeVideoCard
              video={workVideos[currentIndex]}
              isActive={true}
              onVideoEnd={nextSlide}
              onSwipeLeft={nextSlide}
              onSwipeRight={prevSlide}
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-10">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary px-2 py-1 rounded text-xs font-medium">
                {workVideos[currentIndex].category}
              </span>
              <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                {workVideos[currentIndex].brand}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">
              {workVideos[currentIndex].title}
            </h3>
            <p className="text-sm text-white/80 line-clamp-2">
              {workVideos[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-4 gap-2">
        {workVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Small Navigation Arrows for Desktop */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 group"
        aria-label="Previous video"
      >
        <ChevronLeft className="size-4 text-foreground group-hover:text-primary transition-colors duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-300 group"
        aria-label="Next video"
      >
        <ChevronRight className="size-4 text-foreground group-hover:text-primary transition-colors duration-300" />
      </button>
    </div>
  )
}

export default MobileVideoCarousel
