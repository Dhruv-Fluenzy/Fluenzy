import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  delay?: number
  speed?: number
  highlighted?: boolean
  className?: string
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  delay = 0,
  speed = 100,
  highlighted = false,
  className = ""
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(typingInterval)
        }
      }, speed)

      return () => clearInterval(typingInterval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <motion.span
      className={`
        inline-block relative
        ${highlighted 
          ? 'hero-highlight-word bg-clip-text text-transparent' 
          : 'hero-normal-word bg-clip-text text-transparent'
        }
        ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-primary ml-1"
        >
          |
        </motion.span>
      )}
      {isComplete && highlighted && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-primary/50"
        />
      )}
    </motion.span>
  )
}

export default TypingAnimation
