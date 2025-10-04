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
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            What We Do.
          </h2> */}
        </motion.div>        {/* Content Section */}
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

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
              Get Started Today
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium">
              Learn More
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default WhatWeDo
