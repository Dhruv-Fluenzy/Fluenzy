import VideoCarousel from "./VideoCarousel"
import MobileVideoCarousel from "./MobileVideoCarousel"

const ResponsiveVideoCarousel = () => {
  return (
    <div className="w-full">
      {/* Mobile Version - Instagram-like Stories */}
      <div className="block md:hidden">
        <MobileVideoCarousel />
      </div>
      
      {/* Desktop Version - Grid Layout */}
      <div className="hidden md:block">
        <VideoCarousel />
      </div>
    </div>
  )
}

export default ResponsiveVideoCarousel
