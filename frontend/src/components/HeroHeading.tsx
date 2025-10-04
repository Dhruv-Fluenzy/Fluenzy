import { motion } from "framer-motion"
import { AnimatedLine } from "./AnimatedText"
import TypingAnimation from "./TypingAnimation"

interface HeroHeadingProps {
  animationType?: 'slide' | 'typing' | 'bounce'
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ animationType = 'slide' }) => {
  const heroLines = [
    {
      words: [
        { text: "Fluencers", highlighted: false },
        { text: "create", highlighted: true }
      ],
      delay: 0.2,
      fullText: "Fluencers create"
    },
    {
      words: [
        { text: "Fluenzy", highlighted: false },
        { text: "shapes", highlighted: true }
      ],
      delay: 0.4,
      fullText: "Fluenzy shapes"
    },
    {
      words: [
        { text: "Brand", highlighted: false },
        { text: "wins", highlighted: true }
      ],
      delay: 0.6,
      fullText: "Brand wins"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
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

  if (animationType === 'typing') {
    return (
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {heroLines.map((line, index) => (
          <div key={index} className="block mb-2">
            {line.words.map((word, wordIndex) => (
              <span key={wordIndex}>
                <TypingAnimation
                  text={word.text}
                  delay={index * 800 + wordIndex * 400}
                  speed={80}
                  highlighted={word.highlighted}
                />
                {wordIndex < line.words.length - 1 && " "}
              </span>
            ))}
            {index < heroLines.length - 1 && <br />}
          </div>
        ))}
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 2.5 }}
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 58%) 0%, transparent 70%)'
          }}
        />
      </motion.h1>
    )
  }
  return (
    <motion.h1 
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {heroLines.map((line, index) => (
        <motion.div key={index} className="block mb-2" variants={itemVariants}>
          <AnimatedLine 
            words={line.words}
            delay={line.delay}
            className="inline-block"
          />
        </motion.div>
      ))}
      
      {/* Add a subtle glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 blur-3xl opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58%) 0%, transparent 70%)'
        }}
      />
    </motion.h1>
  )
}

export default HeroHeading
