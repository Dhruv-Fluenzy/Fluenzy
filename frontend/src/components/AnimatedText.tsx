import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
}

interface AnimatedWordProps {
  text: string
  highlighted?: boolean
  delay?: number
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.25, 0.25, 0.75] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ 
  text, 
  highlighted = false, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: highlighted ? 1.05 : 1.02 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={`
        inline-block transition-all duration-300 cursor-default
        ${highlighted 
          ? 'hero-highlight-word' 
          : 'hero-normal-word'
        }
        ${className}
      `}
    >
      {text}
    </motion.span>
  )
}

const AnimatedLine: React.FC<{ 
  words: Array<{ text: string; highlighted?: boolean }>, 
  delay?: number,
  className?: string 
}> = ({ words, delay = 0, className = "" }) => {
  return (
    <AnimatedText delay={delay} className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <AnimatedWord 
            text={word.text}
            highlighted={word.highlighted}
            delay={delay + (index * 0.1)}
          />
          {index < words.length - 1 && " "}
        </span>
      ))}
    </AnimatedText>
  )
}

export { AnimatedText, AnimatedWord, AnimatedLine }
