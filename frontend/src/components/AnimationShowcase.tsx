import { motion } from "framer-motion"
import { useState } from "react"
import HeroHeading from "./HeroHeading"

const AnimationShowcase = () => {
  const [animationType, setAnimationType] = useState<'slide' | 'typing' | 'bounce'>('slide')

  const animationTypes = [
    { type: 'slide' as const, label: 'Slide Animation', description: 'Smooth slide-in effect' },
    { type: 'typing' as const, label: 'Typing Effect', description: 'Typewriter animation' },
    { type: 'bounce' as const, label: 'Bounce Effect', description: 'Bouncy entrance' }
  ]

  return (
    <div className="w-full">
      {/* Animation Type Selector - Only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div 
          className="fixed top-20 right-4 z-50 bg-white dark:bg-card p-4 rounded-lg shadow-lg border"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
        >
          <h3 className="text-sm font-semibold mb-3 text-foreground">Animation Type</h3>
          <div className="space-y-2">
            {animationTypes.map((anim) => (
              <button
                key={anim.type}
                onClick={() => setAnimationType(anim.type)}
                className={`
                  w-full text-left p-2 rounded text-xs transition-colors
                  ${animationType === anim.type 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-muted text-muted-foreground'
                  }
                `}
              >
                <div className="font-medium">{anim.label}</div>
                <div className="text-xs opacity-75">{anim.description}</div>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* The actual heading */}
      <HeroHeading key={animationType} animationType={animationType} />
    </div>
  )
}

export default AnimationShowcase
