import { motion } from "framer-motion"

const DebugHeroHeading = () => {
  return (
    <div className="debug-hero-container">
      {/* Basic text test */}
      <h1 className="text-6xl font-bold text-red-500 mb-4">
        DEBUG: Can you see this red text?
      </h1>
      
      {/* Basic black text */}
      <h1 className="text-6xl font-bold text-black dark:text-white mb-4">
        DEBUG: Basic black/white text
      </h1>
      
      {/* Using CSS variables */}
      <h1 className="text-6xl font-bold text-foreground mb-4">
        DEBUG: Using foreground color
      </h1>
      
      {/* Primary color test */}
      <h1 className="text-6xl font-bold text-primary mb-4">
        DEBUG: Using primary color
      </h1>
      
      {/* The actual content */}
      <motion.h1 
        className="text-6xl font-bold text-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-2">
          <span className="text-foreground">Fluencers</span>
          {" "}
          <span className="text-primary font-extrabold">create</span>
        </div>
        <div className="mb-2">
          <span className="text-foreground">Fluenzy</span>
          {" "}
          <span className="text-primary font-extrabold">shapes</span>
        </div>
        <div className="mb-2">
          <span className="text-foreground">Brand</span>
          {" "}
          <span className="text-primary font-extrabold">wins</span>
        </div>
      </motion.h1>
    </div>
  )
}

export default DebugHeroHeading
