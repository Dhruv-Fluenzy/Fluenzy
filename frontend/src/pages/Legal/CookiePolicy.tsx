import { motion } from "framer-motion"
import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const CookiePolicy = () => {
  const sections = [
    {
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small text files stored on your device by your browser. They help websites remember your preferences, login status, and how you interact with the site."
      ]
    },
    {
      title: "2. Types of Cookies We Use",
      content: [
        "Essential Cookies: Required for basic site functionality (e.g., login, page navigation).",
        "Analytics / Performance Cookies: Track website usage to help us improve the site (e.g., Google Analytics).",
        "Marketing / Advertising Cookies: Help us display relevant promotions or track ad campaigns."
      ]
    },
    {
      title: "3. How We Use Cookies",
      content: [
        "• Analyze site traffic and performance.",
        "• Improve website functionality and user experience.",
        "• Tailor content and promotions to user interests.",
        "• Measure effectiveness of marketing campaigns."
      ]
    },
    {
      title: "4. Third-Party Cookies",
      content: [
        "We may use third-party services such as Google Analytics, Meta Pixel, or advertising networks that set their own cookies. Fluenzy.in is not responsible for how third parties handle data."
      ]
    },
    {
      title: "5. Managing Cookies",
      content: [
        "You can control or disable cookies via your browser settings. Note that disabling cookies may affect the functionality of the site."
      ]
    },
    {
      title: "6. Changes to This Policy",
      content: [
        "We may update this Cookie Policy from time to time. Updated versions will be posted on this page with a new \"Last updated\" date."
      ]
    },
    {
      title: "7. Contact Us",
      content: [
        "For questions regarding our Cookie Policy, contact us at:",
        "support@fluenzy.in"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Cookie Policy Content */}
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
              Cookie Policy
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
                Fluenzy.in ("we," "our," "us") uses cookies and similar tracking technologies to improve your experience on our website. By using our site, you agree to the use of cookies as described below.
              </p>
            </div>
          </motion.div>

          {/* Cookie Policy Sections */}
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
            transition={{ duration: 0.7, delay: 1.5, ease: "easeInOut" }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="card-border rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Questions About Our Cookie Policy?
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

export default CookiePolicy
