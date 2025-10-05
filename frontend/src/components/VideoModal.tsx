import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react"
import { useVideoPlayer, formatTime } from "../hooks/useVideoPlayer"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
  description: string
  brand: string
  category: string
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  description,
  brand,
  category
}) => {
  const {
    videoRef,
    isPlaying,
    isMuted,
    duration,
    currentTime,
    volume,
    togglePlay,
    toggleMute,
    setVolume,
    seek,
    toggleFullscreen
  } = useVideoPlayer()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (e.key === ' ') {
        e.preventDefault()
        togglePlay()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, togglePlay])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  const handleVideoLoad = () => {
    if (videoRef.current) {
      console.log('Video loaded successfully:', videoUrl)
      // Auto-play when video loads (if browser allows)
      videoRef.current.play().catch((error) => {
        console.log('Auto-play prevented by browser:', error)
      })
    }
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e.currentTarget.error)
    console.error('Video URL:', videoUrl)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    seek(newTime)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-2xl lg:max-w-6xl bg-black dark:bg-card rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                      {category}
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {brand}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors duration-200"
                  aria-label="Close video"
                >
                  <X className="size-5 text-foreground" />
                </button>
              </div>
            </div>            
            {/* Video Player */}
            <div className="relative aspect-video bg-black group">              
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain cursor-pointer"
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onClick={togglePlay}
                crossOrigin="anonymous"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
                  {/* Progress Bar */}
                  <div 
                    className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer"
                    onClick={handleProgressClick}
                  >
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-150"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                  
                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                      >
                        {isPlaying ? (
                          <Pause className="size-5" />
                        ) : (
                          <Play className="size-5 ml-0.5" />
                        )}
                      </button>
                      
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                      >
                        {isMuted ? (
                          <VolumeX className="size-5" />
                        ) : (
                          <Volume2 className="size-5" />
                        )}
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                      
                      <span className="text-sm font-medium">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => seek(0)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        title="Restart video"
                      >
                        <RotateCcw className="size-4" />
                      </button>
                      
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                        title="Fullscreen"
                      >
                        <Maximize className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>          

            {/* Footer Actions */}
            <div className="display-hidden p-4 bg-muted/30 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>• Click video or spacebar to play/pause</span>
                  <span>• Press ESC to close</span>
                  <span>• Click progress bar to seek</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Powered by Cloudinary</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal
