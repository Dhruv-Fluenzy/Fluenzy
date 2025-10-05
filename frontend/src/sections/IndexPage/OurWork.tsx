import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Badge from "../../components/Badge"
import ResponsiveVideoCarousel from "../../components/ResponsiveVideoCarousel"

const OurWork = () => {
  return (
    <section
      id="work"
      className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-muted/30"
    >
      <div className="container-div">
        <div className="hero-box-bg" />
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge text="Our Work" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Content that connects. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Fluencers that convert.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of scroll-stopping content created by talented influencers. 
            From fashion to tech, beauty to lifestyle - see how we bring brands to life.
          </p>
        </motion.div>        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="max-w-7xl mx-auto"
        >
          <ResponsiveVideoCarousel />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center sm:items-center sm:gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              to="/all-work"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium inline-block text-center w-full sm:w-auto"
            >
              View All Work
            </Link>
          </motion.div>
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/brand-onboarding"
              className="bg-white text-primary px-8 py-3 rounded-lg transition-colors duration-300 font-medium inline-block text-center border border-primary w-full sm:w-auto"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurWork
