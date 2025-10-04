import { motion } from "framer-motion"
import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By using fluenzy.in's website or services, you agree to these Terms. If you do not agree, you must not use our site or services."
      ]
    },
    {
      title: "2. Services",
      content: [
        "fluenzy.in connects brands with influencers and creators. We may update, modify, or discontinue parts of our services at any time without prior notice."
      ]
    },
    {
      title: "3. User Accounts",
      content: [
        "You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your login credentials. You agree to provide accurate and up-to-date information."
      ]
    },
    {
      title: "4. Content",
      content: [
        "Your Content: Any materials (videos, posts, etc.) you submit remain yours, but you grant fluenzy.in a non-exclusive, royalty-free license to use, display, and distribute them as part of delivering our services.",
        "Our Content: All materials on this site (designs, text, graphics, etc.) are owned by or licensed to fluenzy.in. You may not use them without prior written permission."
      ]
    },
    {
      title: "5. Prohibited Activities",
      content: [
        "When using our site/services, you agree not to:",
        "• Violate any laws or regulations.",
        "• Impersonate any person or entity.",
        "• Interfere with or disrupt the functionality of our services.",
        "• Attempt unauthorized access to our systems."
      ]
    },
    {
      title: "6. Payment & Fees",
      content: [
        "If you enter into paid collaborations, campaign fees, or subscriptions with fluenzy.in, payment terms will be outlined separately in your agreement or invoice. All payments are non-refundable unless stated otherwise."
      ]
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "fluenzy.in will not be liable for indirect, incidental, or consequential damages, any loss of profits, data, or business opportunities, or third-party actions, including influencers, brands, or platforms. Our liability is limited to the maximum extent permitted by law."
      ]
    },
    {
      title: "8. Termination",
      content: [
        "We may suspend or terminate your access to our site/services at our discretion, with or without cause."
      ]
    },
    {
      title: "9. Governing Law",
      content: [
        "These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be resolved exclusively in the courts of Guwahati, Assam."
      ]
    },
    {
      title: "10. Contact Us",
      content: [
        "For any questions about these Terms, contact us at: support@fluenzy.in"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Terms of Service Content */}
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
              Terms of Service
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
                Welcome to fluenzy.in! By accessing or using our website (fluenzy.in) and related services, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
            </div>
          </motion.div>

          {/* Terms Sections */}
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
                Questions About Our Terms?
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

export default TermsOfService
