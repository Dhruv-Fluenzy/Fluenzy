import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

interface StatCardProps {
  value: string
  title: string
  description: string
  delay?: number
}

const StatCard: React.FC<StatCardProps> = ({ value, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}      className="card-border rounded-xl p-6 hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden group"
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Counter with icon-like spacing */}
        <div className="mb-4">
          <AnimatedCounter 
            value={value}
            delay={delay * 1000 + 500} // Convert to milliseconds and add base delay
            duration={2000}
            className="text-4xl md:text-5xl font-bold text-primary mb-2"
          />
        </div>
        
        <motion.h3 
          className="text-xl font-semibold text-foreground mb-3 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>        <motion.p 
          className="text-base text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.4 }}
        >
          {description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split('\n').length - 1 && <br />}
            </span>
          ))}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default StatCard
