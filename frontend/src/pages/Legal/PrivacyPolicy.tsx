import { motion } from "framer-motion"
import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal Information: name, email address, phone number, social media handles, brand details, influencer profiles.",
        "Content Information: influencer content submissions, brand campaign briefs, communication history.",
        "Technical Information: IP address, browser type, device information, cookies, analytics data."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "Connect brands with influencers.",
        "Facilitate collaborations and campaigns.",
        "Improve and personalize our services.",
        "Send updates, promotional emails, and service-related communications.",
        "Ensure compliance with applicable laws."
      ]
    },
    {
      title: "3. Sharing of Information",
      content: [
        "We do not sell your personal information. We may share information with:",
        "Service Providers: third-party tools (e.g., email platforms, analytics, hosting).",
        "Business Partners: brands and influencers, only as necessary to facilitate collaborations.",
        "Legal & Safety: if required by law or to protect our rights, safety, and property."
      ]
    },
    {
      title: "4. Cookies & Tracking",
      content: [
        "We use cookies, pixels, and analytics tools (like Google Analytics) to understand how visitors use our site and improve functionality. You can disable cookies through your browser, but some features may not work properly."
      ]
    },
    {
      title: "5. Data Retention",
      content: [
        "We retain your information as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us."
      ]
    },
    {
      title: "6. Your Rights",
      content: [
        "Depending on your location, you may have rights to:",
        "Access, update, or delete your information.",
        "Opt out of promotional emails.",
        "Request a copy of the data we hold about you.",
        "To exercise these rights, contact us at: support@fluenzy.in"
      ]
    },
    {
      title: "7. Security",
      content: [
        "We use reasonable technical and organizational measures to protect your data, but no online system is 100% secure."
      ]
    },
    {
      title: "8. Children's Privacy",
      content: [
        "Our services are not directed to children under 13 (or 16 in some regions). We do not knowingly collect data from children."
      ]
    },
    {
      title: "9. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a new \"Last updated\" date."
      ]
    },
    {
      title: "10. Contact Us",
      content: [
        "If you have questions about this Privacy Policy, contact us at:",
        "Fluenzy.in",
        "Email: support@fluenzy.in",
        "Website: fluenzy.in"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Privacy Policy Content */}
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: 21 September, 2025
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
                At Fluenzy.in ("we," "our," "us"), we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you use our website fluenzy.in (the "Site") and related services.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
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
            transition={{ duration: 0.7, delay: 1.8, ease: "easeInOut" }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="card-border rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Questions About Our Privacy Policy?
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

export default PrivacyPolicy
