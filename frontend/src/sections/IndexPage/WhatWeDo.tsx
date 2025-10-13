import { motion } from "framer-motion"
import Badge from "../../components/Badge"
import ServiceCard from "../../components/ServiceCard"
import { whatWeDoServices } from "../../constants"

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="w-full py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="container-div">
        <div className="hero-box-bg" />
        
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <Badge text="What We Do" />
        </motion.div>     
           
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whatWeDoServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                step={service.step}
                title={service.title}
                description={service.description}
                highlights={service.highlights}
                delay={0.1 * (index + 5)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDo
