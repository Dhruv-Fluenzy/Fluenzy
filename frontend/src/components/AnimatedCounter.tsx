import { useCountAnimation } from '../hooks/useCountAnimation'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  duration?: number
  delay?: number
  className?: string
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000, 
  delay = 0,
  className = ""
}) => {
  const { ref, isIntersecting } = useIntersectionObserver(0.3)

  // Extract numeric value and suffix from the value string
  const parseValue = (val: string) => {
    const match = val.match(/^(\d+(?:\.\d+)?)(.*)?$/)
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2] || ''
      }
    }
    return { number: 0, suffix: val }
  }

  const { number, suffix } = parseValue(value)
  const animatedNumber = useCountAnimation({ 
    end: number, 
    duration, 
    delay,
    startAnimation: isIntersecting 
  })

  // Format the number based on the original format
  const formatNumber = (num: number) => {
    if (value.includes('.')) {
      return num.toFixed(1)
    }
    return Math.floor(num).toString()
  }
  return (
    <motion.div 
      ref={ref}
      className={className || "text-3xl md:text-4xl font-bold text-primary mb-2"}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: delay / 1000,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <span className="tabular-nums tracking-tight">
        {formatNumber(animatedNumber)}
      </span>
      <span className="text-primary/80 ml-0.5">
        {suffix}
      </span>
    </motion.div>
  )
}

export default AnimatedCounter
