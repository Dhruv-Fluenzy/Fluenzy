import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Button from "@/components/Button"

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 404 Content */}
      <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container-div">
          <div className="hero-box-bg" />
          
          {/* Main 404 Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary mb-8 leading-none"
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Oops! Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, let's get you back on track to discover amazing influencer collaborations.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full sm:w-auto"
            >
              <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium inline-block text-center w-full sm:w-auto">
                Go to Homepage
              </Link>
            </motion.div>

            {/* Additional Help Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <p className="text-gray-500 mb-4">Need help? Try these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link 
                  to="/all-work" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Our Work
                </Link>
                <Link 
                  to="/services" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Services
                </Link>
                <Link 
                  to="/brand-onboarding" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Brand Onboarding
                </Link>
                <Link 
                  to="/fluencer-onboarding" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Fluencer Onboarding
                </Link>
                <a 
                  href="mailto:support@fluenzy.in" 
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default NotFound
