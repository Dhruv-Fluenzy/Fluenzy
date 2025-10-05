import { useRef } from 'react'

interface UseSwipeGesturesOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  threshold?: number
}

export const useSwipeGestures = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50
}: UseSwipeGesturesOptions) => {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    const startPoint = { x: touch.clientX, y: touch.clientY }
    touchStartRef.current = startPoint
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return

    const touch = e.changedTouches[0]
    const endPoint = { x: touch.clientX, y: touch.clientY }
    
    const deltaX = endPoint.x - touchStartRef.current.x
    const deltaY = endPoint.y - touchStartRef.current.y
    
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // Determine swipe direction based on the larger delta
    if (Math.max(absDeltaX, absDeltaY) > threshold) {
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          onSwipeRight?.()
        } else {
          onSwipeLeft?.()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          onSwipeDown?.()
        } else {
          onSwipeUp?.()
        }
      }
    }    touchStartRef.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent default scrolling during horizontal swipes
    if (!touchStartRef.current) return

    const touch = e.touches[0]
    const currentPoint = { x: touch.clientX, y: touch.clientY }
    
    const deltaX = Math.abs(currentPoint.x - touchStartRef.current.x)
    const deltaY = Math.abs(currentPoint.y - touchStartRef.current.y)

    // If horizontal movement is greater, prevent vertical scrolling
    if (deltaX > deltaY && deltaX > threshold / 2) {
      e.preventDefault()
    }
  }

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove
  }
}
