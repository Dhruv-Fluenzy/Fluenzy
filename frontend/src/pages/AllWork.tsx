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
  }, [filter])

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
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-background border border-border rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
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
          </motion.div>          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16 text-center"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="w-full pb-20 md:pb-32 lg:pb-40">
        <div className="container-div">          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
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
              >                <VideoCard
                  id={video.id}
                  title={video.title}
                  description={video.description}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  category={video.category}
                  brand={video.brand}
                  duration={video.duration}
                  onClick={() => handleVideoClick(video)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category to see our work.
              </p>
            </motion.div>
          )}
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
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand-onboarding"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg shadow-primary/25 inline-block"
                >
                  Start Your Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand-onboarding"
                  className="border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium inline-block"
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
