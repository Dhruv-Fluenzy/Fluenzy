import { motion } from "framer-motion"
import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Disclaimer = () => {
  const sections = [
    {
      title: "1. No Guaranteed Results",
      content: [
        "Fluenzy.in connects brands with influencers and provides content creation services. We do not guarantee specific results, sales, engagement, or return on investment from any campaign. All campaign performance depends on multiple factors, including influencer audience behavior, platform algorithms, and brand execution."
      ]
    },
    {
      title: "2. Third-Party Content & Links",
      content: [
        "Our website may include links to third-party websites or content. Fluenzy.in is not responsible for the accuracy, legality, or content of these external sites. Accessing external sites is done at your own risk."
      ]
    },
    {
      title: "3. Responsibility of Users",
      content: [
        "Brands and influencers are responsible for ensuring that their campaigns comply with applicable laws, regulations, and platform guidelines (e.g., ASCI, FTC, or social media rules). Users agree to not hold fluenzy.in liable for any disputes, claims, or damages arising from campaigns."
      ]
    },
    {
      title: "4. Limitation of Liability",
      content: [
        "Fluenzy.in, its owners, or employees shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the site or services."
      ]
    },
    {
      title: "5. Changes to this Disclaimer",
      content: [
        "Fluenzy.in may update this Disclaimer at any time without prior notice. The latest version will always be posted on this page."
      ]
    },
    {
      title: "6. Contact Us",
      content: [
        "If you have questions about this Disclaimer, contact us at:",
        "support@fluenzy.in"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Disclaimer Content */}
      <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container-div">
          <div className="hero-box-bg" />
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Badge text="Legal" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: September 21, 2025
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="card-border rounded-xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The information, content, and services provided on fluenzy.in are for general informational purposes only. By using our website or services, you acknowledge and agree to the following:
              </p>
            </div>
          </motion.div>

          {/* Disclaimer Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeInOut" }}
                className="card-border rounded-xl p-6 md:p-8"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p 
                      key={pIndex} 
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4, ease: "easeInOut" }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="card-border rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Questions About Our Disclaimer?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help. Contact us anytime for clarification or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:support@fluenzy.in"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                >
                  Contact Support
                </a>
                <a 
                  href="/"
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Disclaimer
