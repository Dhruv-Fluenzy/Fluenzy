import { motion } from "framer-motion"

interface ServiceCardProps {
  step: string
  title: string
  description: string
  highlights: string[]
  delay?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  step, 
  title, 
  description, 
  highlights, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeInOut" }}
      className="card-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      {/* Step Number */}
      <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-primary font-bold text-lg">{step}</div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Highlights */}
      <div className="flex flex-wrap justify-center gap-2">
        {highlights.map((highlight, index) => (
          <span
            key={index}
            className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ServiceCard
