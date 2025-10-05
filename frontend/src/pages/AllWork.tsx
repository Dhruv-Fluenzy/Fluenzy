import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Badge from "../components/Badge"
import VideoCard from "../components/VideoCard"
import VideoModal from "../components/VideoModal"
import { workVideosForPage } from "../constants"

interface Video {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  category: string
  brand: string
  duration: number
}

/*
id: number; title: string; description: string; thumbnail: string; videoUrl: string; category: string; brand: string; duration: number; } 
*/


const AllWork = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [mobileVideoIndex, setMobileVideoIndex] = useState(0)

  // Get unique categories for filtering
  const categories = ["All", ...Array.from(new Set(workVideosForPage.map(video => video.category)))]

  // Filter videos based on selected category and search query
  const filteredVideos = workVideosForPage.filter(video => {
    const matchesCategory = filter === "All" || video.category === filter
    const matchesSearch = searchQuery === "" || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.brand.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
  // Clear search when filter changes
  useEffect(() => {
    setSearchQuery("")
    setMobileVideoIndex(0) // Reset to first video when filter changes
  }, [filter])

  // Reset mobile video index when filtered videos change
  useEffect(() => {
    if (mobileVideoIndex >= filteredVideos.length) {
      setMobileVideoIndex(0)
    }
  }, [filteredVideos.length, mobileVideoIndex])

  const handleVideoClick = (video: Video) => {
  setSelectedVideo(video)
  setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container-div">
          <div className="hero-box-bg" />
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge text="Portfolio" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our Complete
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Work Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of influencer content across various industries. 
              From viral campaigns to brand storytelling, discover how we transform creative visions 
              into scroll-stopping content that drives real results.
            </p>
          </motion.div>          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="max-w-md mx-auto mb-6 md:mb-8 px-4 md:px-0"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 text-sm md:text-base bg-background border border-border rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            className="mb-8 md:mb-12 px-4 md:px-0"
          >
            {/* Mobile Filter - Horizontal Scroll */}
            <div className="block md:hidden">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 ${
                      filter === category
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop Filter - Centered */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            className="mb-12 md:mb-16 px-4 md:px-0"
          >
            {/* Mobile Stats - Stacked */}
            <div className="block md:hidden">
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-4 space-y-3">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary block">{filteredVideos.length}</span>
                  <span className="text-sm text-muted-foreground">
                    {filter === "All" ? "Total Projects" : `${filter} Projects`}
                  </span>
                </div>
                <div className="flex justify-center gap-6">
                  <div className="text-center">
                    <span className="text-lg font-bold text-primary block">{categories.length - 1}</span>
                    <span className="text-xs text-muted-foreground">Categories</span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-primary block">100%</span>
                    <span className="text-xs text-muted-foreground">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Stats - Horizontal */}
            <div className="hidden md:flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{filteredVideos.length}</span>
                <span className="text-muted-foreground">
                  {filter === "All" ? "Total Projects" : `${filter} Projects`}
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{categories.length - 1}</span>
                <span className="text-muted-foreground">Categories</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">100%</span>
                <span className="text-muted-foreground">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>      {/* Video Grid Section */}
      <section className="w-full pb-20 md:pb-32 lg:pb-40">
        <div className="container-div">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
          >            {/* Mobile View - Instagram-like Single Video Display */}
            <div className="block md:hidden">
              {filteredVideos.length > 0 ? (
                <div className="w-full max-w-sm mx-auto">
                  {/* Main Video Container */}
                  <div 
                    className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-4"
                    style={{ aspectRatio: '9/16' }}
                  >
                    {/* Current Video */}
                    <motion.div
                      key={mobileVideoIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => handleVideoClick(filteredVideos[mobileVideoIndex])}
                    >
                      <img 
                        src={filteredVideos[mobileVideoIndex].thumbnail} 
                        alt={filteredVideos[mobileVideoIndex].title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
                        >
                          <svg className="w-8 h-8 ml-1 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </motion.div>
                      </div>

                      {/* Top Content */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="flex gap-2">
                          <span className="bg-primary px-2 py-1 rounded-full text-xs font-medium text-white">
                            {filteredVideos[mobileVideoIndex].category}
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white">
                            {filteredVideos[mobileVideoIndex].brand}
                          </span>
                        </div>
                        
                        {/* Duration */}
                        <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                          </svg>
                          <span>{Math.floor(filteredVideos[mobileVideoIndex].duration / 60)}:{(filteredVideos[mobileVideoIndex].duration % 60).toString().padStart(2, '0')}</span>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-white mb-3">
                          <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                            {filteredVideos[mobileVideoIndex].title}
                          </h3>
                          <p className="text-sm text-white/80 line-clamp-2">
                            {filteredVideos[mobileVideoIndex].description}
                          </p>
                        </div>
                      </div>

                      {/* Navigation Hint Areas */}
                      {filteredVideos.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setMobileVideoIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length)
                            }}
                            className="absolute left-0 top-0 w-1/3 h-full bg-transparent flex items-center justify-start pl-2"
                            aria-label="Previous video"
                          >
                            <div className="w-8 h-16 bg-gradient-to-r from-white/10 to-transparent rounded-r-lg opacity-0 hover:opacity-100 transition-opacity" />
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setMobileVideoIndex((prev) => (prev + 1) % filteredVideos.length)
                            }}
                            className="absolute right-0 top-0 w-1/3 h-full bg-transparent flex items-center justify-end pr-2"
                            aria-label="Next video"
                          >
                            <div className="w-8 h-16 bg-gradient-to-l from-white/10 to-transparent rounded-l-lg opacity-0 hover:opacity-100 transition-opacity" />
                          </button>
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* Progress Dots */}
                  {filteredVideos.length > 1 && (
                    <div className="flex justify-center gap-1 mb-4 px-4 overflow-x-auto scrollbar-hide">
                      {filteredVideos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setMobileVideoIndex(index)}
                          className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300 ${
                            mobileVideoIndex === index
                              ? "bg-primary scale-125"
                              : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                          }`}
                          aria-label={`Go to video ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Video Counter and Navigation */}
                  <div className="text-center text-sm text-muted-foreground mb-4">
                    Video {mobileVideoIndex + 1} of {filteredVideos.length}
                  </div>
                  
                  {filteredVideos.length > 1 && (
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setMobileVideoIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length)}
                        className="px-4 py-2 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setMobileVideoIndex((prev) => (prev + 1) % filteredVideos.length)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground">
                    Try selecting a different category to see our work.
                  </p>
                </div>
              )}
            </div>

            {/* Desktop View - Grid Layout */}
            <div className="hidden md:block">
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.1 * index,
                        ease: "easeOut" 
                      }}
                      whileHover={{ y: -8 }}
                      className="group cursor-pointer"
                      onClick={() => handleVideoClick(video)}
                    >
                      <VideoCard
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
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground">
                    Try selecting a different category to see our work.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container-div">          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to bring your brand vision to life with engaging, 
              scroll-stopping content that converts.
            </p>            <div className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center sm:items-center sm:gap-4 px-4 sm:px-0">
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand-onboarding"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg shadow-primary/25 inline-block text-center w-full sm:w-auto"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand-onboarding"
                  className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium inline-block text-center w-full sm:w-auto"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>      {/* Video Modal */}
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

      <Footer />
    </div>
  )
}

export default AllWork
