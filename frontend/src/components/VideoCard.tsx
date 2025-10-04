import { motion } from "framer-motion"
import { Play, Clock } from "lucide-react"
import { useVideoDuration, formatVideoDuration } from "../hooks/useVideoDuration"

interface VideoCardProps {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  category: string
  brand: string
  duration?: number // fallback duration in seconds
  delay?: number
  onClick?: () => void
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  description, 
  thumbnail, 
  videoUrl,
  category, 
  brand, 
  duration: fallbackDuration,
  delay = 0,
  onClick 
}) => {
  const { duration: videoDuration, isLoading } = useVideoDuration(videoUrl)
  
  // Use actual video duration if available, otherwise use fallback
  const displayDuration = videoDuration > 0 ? videoDuration : (fallbackDuration || 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeInOut" }}
      onClick={onClick}
      className="group relative bg-white dark:bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
          {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
            <Play className="size-6 ml-1" fill="currentColor" />
          </div>
        </div>        {/* Video Duration Badge */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
            <Clock className="size-3" />            <span>
              {isLoading ? '...' : formatVideoDuration(displayDuration)}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {brand}
          </span>
          <span className="text-xs text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
            Watch Now →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default VideoCard
