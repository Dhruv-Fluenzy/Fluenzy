import { motion } from "framer-motion"

interface SimpleHeroHeadingProps {
  className?: string
}

const SimpleHeroHeading: React.FC<SimpleHeroHeadingProps> = ({ className = "" }) => {
  const lines = [
    { normal: "Fluencers", highlight: "create" },
    { normal: "Fluenzy", highlight: "shapes" },
    { normal: "Brand", highlight: "wins" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <motion.h1 
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >      {lines.map((line, index) => (
        <motion.div key={index} className="block mb-2" variants={lineVariants}>
          <span className="hero-normal-word">
            {line.normal}
          </span>
          {" "}
          <motion.span
            className="hero-highlight-word relative"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            {line.highlight}
            {/* Simple underline animation */}
            <motion.div
              className="absolute -bottom-1 left-0 h-1 bg-primary/30 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8, ease: "easeOut" }}
            />
          </motion.span>
        </motion.div>
      ))}
    </motion.h1>
  )
}

export default SimpleHeroHeading
