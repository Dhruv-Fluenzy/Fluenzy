import { motion } from "framer-motion"

interface AlternativeHeroHeadingProps {
  variant?: 'default' | 'gradient' | 'minimal'
}

const AlternativeHeroHeading: React.FC<AlternativeHeroHeadingProps> = ({ variant = 'default' }) => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "backOut"
      }
    }
  }

  if (variant === 'gradient') {
    return (
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, index) => (
          <motion.div key={index} className="block mb-2" variants={lineVariants}>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {line.normal}
            </span>
            {" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent font-extrabold"
              variants={highlightVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              {line.highlight}
            </motion.span>
          </motion.div>
        ))}
      </motion.h1>
    )
  }

  if (variant === 'minimal') {
    return (
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight text-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {lines.map((line, index) => (
          <div key={index} className="block mb-2">
            <span>{line.normal}</span>
            {" "}
            <span className="text-primary font-extrabold underline decoration-primary/30 underline-offset-8">
              {line.highlight}
            </span>
          </div>
        ))}
      </motion.h1>
    )
  }

  // Default variant with enhanced animations
  return (
    <motion.h1 
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <motion.div key={index} className="block mb-2 relative" variants={lineVariants}>
          <span className="hero-normal-word bg-clip-text text-transparent">
            {line.normal}
          </span>
          {" "}
          <motion.span
            className="hero-highlight-word bg-clip-text text-transparent relative"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
          >
            {line.highlight}
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6, ease: "easeOut" }}
            />
          </motion.span>
        </motion.div>
      ))}
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 blur-3xl opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.5 }}
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58%) 0%, transparent 70%)'
        }}
      />
    </motion.h1>
  )
}

export default AlternativeHeroHeading
