import { useRef, useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

interface InstagramLikeVideoCardProps {
  video: {
    id: number
    title: string
    description: string
    thumbnail: string
    videoUrl: string
    category: string
    brand: string
    duration?: number
  }
  isActive: boolean
  onVideoEnd?: () => void
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

const InstagramLikeVideoCard: React.FC<InstagramLikeVideoCardProps> = ({ 
  video, 
  isActive, 
  onVideoEnd,
  onSwipeLeft,
  onSwipeRight
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showVolumeIcon, setShowVolumeIcon] = useState(false)
  const [showPlayIcon, setShowPlayIcon] = useState(false)  
  const [isLoading, setIsLoading] = useState(true)
  const [isHolding, setIsHolding] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  
  // Touch/Mouse tracking for swipe and hold gestures
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const iconTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Video event handlers
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    // Set a timeout for video loading (10 seconds)
    loadingTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout for:', video.videoUrl)
        setHasError(true)
        setIsLoading(false)
      }
    }, 10000)

    const handleLoadedData = () => {
      console.log('Video loaded successfully:', video.videoUrl)
      setIsLoading(false)
      setHasError(false)
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      if (isActive) {
        videoElement.play().catch((error) => {
          console.error('Error playing video:', error)
          setHasError(true)
        })
        setIsPlaying(true)
      }
    }

    const handleError = (e: Event) => {
      console.error('Video loading error:', e, 'URL:', video.videoUrl)
      setIsLoading(false)
      setHasError(true)
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }

    const handleLoadStart = () => {
      console.log('Video loading started:', video.videoUrl)
      setIsLoading(true)
      setHasError(false)
    }

    const handleCanPlay = () => {
      console.log('Video can start playing:', video.videoUrl)
      // Additional fallback in case loadeddata doesn't fire
      if (isLoading) {
        setIsLoading(false)
        setHasError(false)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      onVideoEnd?.()
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    videoElement.addEventListener('loadeddata', handleLoadedData)
    videoElement.addEventListener('loadstart', handleLoadStart)
    videoElement.addEventListener('canplay', handleCanPlay)
    videoElement.addEventListener('error', handleError)
    videoElement.addEventListener('ended', handleEnded)  
    videoElement.addEventListener('play', handlePlay)
    videoElement.addEventListener('pause', handlePause)

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      videoElement.removeEventListener('loadeddata', handleLoadedData)
      videoElement.removeEventListener('loadstart', handleLoadStart)
      videoElement.removeEventListener('canplay', handleCanPlay)
      videoElement.removeEventListener('error', handleError)
      videoElement.removeEventListener('ended', handleEnded)
      videoElement.removeEventListener('play', handlePlay)
      videoElement.removeEventListener('pause', handlePause)
    }
  }, [isActive, onVideoEnd, video.videoUrl, isLoading])

  // Retry mechanism for failed videos
  const retryVideoLoad = useCallback(() => {
    if (retryCount < 3) {
      console.log(`Retrying video load (attempt ${retryCount + 1}):`, video.videoUrl)
      setRetryCount(prev => prev + 1)
      setHasError(false)
      setIsLoading(true)
      if (videoRef.current) {
        videoRef.current.load() // Force reload
      }
    }
  }, [retryCount, video.videoUrl])

  // Reset retry count when video changes
  useEffect(() => {
    setRetryCount(0)
    setHasError(false)
    setIsLoading(true)
  }, [video.id])

  // Handle active state changes
  useEffect(() => {
    if (!videoRef.current) return

    if (isActive && !isLoading) {
      videoRef.current.play().catch(console.error)
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive, isLoading])

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current)
      if (iconTimeoutRef.current) clearTimeout(iconTimeoutRef.current)
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current)
    }
  }, [])

  // Force video to load when it becomes active
  useEffect(() => {
    if (isActive && videoRef.current && isLoading) {
      // Force video load if it hasn't started loading
      const currentSrc = videoRef.current.currentSrc || videoRef.current.src
      if (!currentSrc || currentSrc !== video.videoUrl) {
        videoRef.current.src = video.videoUrl
        videoRef.current.load()
      }
    }
  }, [isActive, video.videoUrl, isLoading])

  const showIconTemporarily = (type: 'volume' | 'play') => {
    if (iconTimeoutRef.current) clearTimeout(iconTimeoutRef.current)
    
    if (type === 'volume') {
      setShowVolumeIcon(true)
      setShowPlayIcon(false)
    } else {
      setShowPlayIcon(true) 
      setShowVolumeIcon(false)
    }

    iconTimeoutRef.current = setTimeout(() => {
      setShowVolumeIcon(false)
      setShowPlayIcon(false)
    }, 1000)
  }

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return
    
    const newMutedState = !isMuted
    videoRef.current.muted = newMutedState
    setIsMuted(newMutedState)
    showIconTemporarily('volume')
  }, [isMuted])

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(console.error)
    }
    showIconTemporarily('play')
  }, [isPlaying])

  // Touch handlers for Instagram-like interactions
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    const startPoint = { 
      x: touch.clientX, 
      y: touch.clientY, 
      time: Date.now() 
    }
    touchStartRef.current = startPoint
    
    // Start hold timer for pause functionality
    holdTimeoutRef.current = setTimeout(() => {
      if (isPlaying && videoRef.current) {
        videoRef.current.pause()
        setIsHolding(true)
      }
    }, 200) // 200ms hold threshold
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return

    const touch = e.touches[0]
    const currentPoint = { x: touch.clientX, y: touch.clientY }
    
    const deltaX = Math.abs(currentPoint.x - touchStartRef.current.x)
    const deltaY = Math.abs(currentPoint.y - touchStartRef.current.y)

    // If user is moving significantly, cancel hold
    if (deltaX > 20 || deltaY > 20) {
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current)
        holdTimeoutRef.current = null
      }
    }

    // Prevent vertical scrolling during horizontal swipes
    if (deltaX > deltaY && deltaX > 25) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current)
      holdTimeoutRef.current = null
    }

    // Resume if was holding
    if (isHolding) {
      if (videoRef.current && !isPlaying) {
        videoRef.current.play().catch(console.error)
      }
      setIsHolding(false)
      return
    }

    if (!touchStartRef.current) return

    const touch = e.changedTouches[0]
    const endPoint = { x: touch.clientX, y: touch.clientY }
    const duration = Date.now() - touchStartRef.current.time
    
    const deltaX = endPoint.x - touchStartRef.current.x
    const deltaY = endPoint.y - touchStartRef.current.y
    
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // Handle swipe gestures
    if (absDeltaX > 50 && absDeltaX > absDeltaY) {
      if (deltaX > 0) {
        onSwipeRight?.()
      } else {
        onSwipeLeft?.()
      }
    }    
    // Handle tap gestures (quick touch with minimal movement)
    else if (duration < 300 && absDeltaX < 20 && absDeltaY < 20) {
      const rect = e.currentTarget.getBoundingClientRect()
      const tapY = endPoint.y - rect.top
      
      // Top area (25%) - Volume toggle
      if (tapY < rect.height * 0.25) {
        toggleMute()
      }
      // Center area (50%) - Play/Pause
      else if (tapY < rect.height * 0.75) {
        togglePlay()
      }
      // Bottom area (25%) - Also play/pause for easier access
      else {
        togglePlay()
      }
    }

    touchStartRef.current = null
  }

  return (
    <div 
      className="relative w-full h-full bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ userSelect: 'none', touchAction: 'pan-y' }}
    >      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={video.videoUrl}
        poster={video.thumbnail}
        loop
        playsInline
        muted={isMuted}        preload="metadata"
        controls={false}
        crossOrigin="anonymous"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        onLoadStart={() => {
          console.log('Video load started for:', video.videoUrl)
          setIsLoading(true)
          setHasError(false)
        }}
        onLoadedData={() => {
          console.log('Video loaded successfully:', video.videoUrl)
          setIsLoading(false)
          setHasError(false)
        }}
        onError={(e) => {
          console.error('Video loading error:', e, 'URL:', video.videoUrl)
          setIsLoading(false)
          setHasError(true)
        }}
        onCanPlay={() => {
          console.log('Video can play:', video.videoUrl)
          if (isLoading) {
            setIsLoading(false)
            setHasError(false)
          }
        }}
      />

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-15">
          <div className="text-center text-white p-4">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 13.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className="text-sm mb-3">Failed to load video</p>
            {retryCount < 3 && (
              <button
                onClick={retryVideoLoad}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors"
              >
                Retry ({3 - retryCount} attempts left)
              </button>
            )}
            {retryCount >= 3 && (
              <p className="text-xs text-red-300">Please check your internet connection</p>
            )}
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
          />
        </div>
      )}

      {/* Thumbnail Fallback */}
      {!isActive && (
        <div className="absolute inset-0 z-10">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
              <Play className="size-8 ml-1 text-black" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {/* Hold to Pause Overlay */}
      {isHolding && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-black/60 backdrop-blur-sm rounded-full p-6"
          >
            <Pause className="size-12 text-white" fill="currentColor" />
          </motion.div>
        </div>
      )}

      {/* Volume Icon Feedback */}
      <AnimatePresence>
        {showVolumeIcon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
              {isMuted ? (
                <VolumeX className="size-8 text-white" />
              ) : (
                <Volume2 className="size-8 text-white" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play/Pause Icon Feedback */}
      <AnimatePresence>
        {showPlayIcon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
              {isPlaying ? (
                <Pause className="size-8 text-white" fill="currentColor" />
              ) : (
                <Play className="size-8 ml-1 text-white" fill="currentColor" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual tap zones indicator (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="h-1/4 border-b border-red-500/20 flex items-center justify-center">
            <span className="text-white/50 text-xs">TAP: Volume</span>
          </div>
          <div className="h-2/4 border-b border-green-500/20 flex items-center justify-center">
            <span className="text-white/50 text-xs">TAP: Play/Pause | HOLD: Pause</span>
          </div>
          <div className="h-1/4 flex items-center justify-center">
            <span className="text-white/50 text-xs">TAP: Play/Pause</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default InstagramLikeVideoCard
