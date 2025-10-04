import { motion } from "framer-motion"
import { Workflow, DollarSign, TrendingUp, Star } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
  icon: string
  delay?: number
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  title, 
  description, 
  icon, 
  delay = 0 
}) => {
  const iconMap = {
    Workflow,
    DollarSign,
    TrendingUp,
    Star
  };

  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeInOut" }}
      className="card-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="size-8 text-primary" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default BenefitCard
