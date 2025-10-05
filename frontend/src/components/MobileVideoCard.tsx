import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface MobileVideoCardProps {
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
}

const MobileVideoCard: React.FC<MobileVideoCardProps> = ({ 
  video, 
  isActive, 
  onVideoEnd 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement) return

    const handleLoadedData = () => {
      setIsLoading(false)
      if (isActive) {
        videoElement.play().catch(console.error)
        setIsPlaying(true)
      }
    }

    const handleEnded = () => {
      setIsPlaying(false)
      onVideoEnd?.()
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    videoElement.addEventListener('loadeddata', handleLoadedData)
    videoElement.addEventListener('ended', handleEnded)
    videoElement.addEventListener('play', handlePlay)
    videoElement.addEventListener('pause', handlePause)

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData)
      videoElement.removeEventListener('ended', handleEnded)
      videoElement.removeEventListener('play', handlePlay)
      videoElement.removeEventListener('pause', handlePause)
    }
  }, [isActive, onVideoEnd])

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

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(console.error)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVideoClick = () => {
    setShowControls(true)
    setTimeout(() => setShowControls(false), 2000)
  }

  return (
    <div 
      className="relative w-full h-full bg-black overflow-hidden"
      onClick={handleVideoClick}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={video.videoUrl}
        poster={video.thumbnail}
        loop
        playsInline
        muted={isMuted}
        preload="metadata"
      />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-white border-t-transparent rounded-full"
          />
        </div>
      )}

      {/* Thumbnail Fallback */}
      {!isActive && (
        <div className="absolute inset-0">
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

      {/* Video Controls Overlay */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            {/* Center Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="bg-white/90 backdrop-blur-sm rounded-full p-4 mx-auto"
            >
              {isPlaying ? (
                <Pause className="size-8 text-black" fill="currentColor" />
              ) : (
                <Play className="size-8 ml-1 text-black" fill="currentColor" />
              )}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full"
            >
              {isMuted ? (
                <VolumeX className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tap Areas for Navigation (Left/Right) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/3 h-full" />
        <div className="w-1/3 h-full" onClick={togglePlay} />
        <div className="w-1/3 h-full" />
      </div>
    </div>
  )
}

export default MobileVideoCard
