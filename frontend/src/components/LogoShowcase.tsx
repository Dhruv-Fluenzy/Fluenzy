import React from 'react'
import { logoIconsList } from '../constants'

// Define the type for logo icon
interface LogoIcon {
  imgPath: string
}

// Props interface for LogoIcon component
interface LogoIconProps {
  icon: LogoIcon
  index: number
}

const LogoIcon: React.FC<LogoIconProps> = ({ icon, index }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img 
        src={icon.imgPath} 
        alt={`Company logo ${index + 1}`}
        className="h-6 md:h-11 lg:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 "
      />
    </div>
  )
}

const LogoShowcase: React.FC = () => {
  return (
    <div className="md:my-14 my-7 relative">
      {/* <div className="gradient-edge" /> */}
      {/* <div className="gradient-edge" /> */}

      <div className="marquee h-20">
        <div className="marquee-box md:gap-8 gap-4">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo-${index}`} icon={icon} index={index} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo-duplicate-${index}`} icon={icon} index={index} />
          ))}

                    {logoIconsList.map((icon, index) => (
            <LogoIcon key={`logo-duplicate-${index}`} icon={icon} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoShowcase
