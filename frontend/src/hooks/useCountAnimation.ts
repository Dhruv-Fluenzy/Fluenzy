import { useEffect, useState } from 'react'

interface UseCountAnimationProps {
  end: number
  duration?: number
  delay?: number
  startAnimation?: boolean
}

export const useCountAnimation = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  startAnimation = true 
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!startAnimation || hasStarted) return

    const timer = setTimeout(() => {
      setHasStarted(true)
      let startTime: number
      let animationId: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * end)
        
        setCount(currentCount)
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      
      animationId = requestAnimationFrame(animate)
      
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay, startAnimation, hasStarted])

  return count
}
