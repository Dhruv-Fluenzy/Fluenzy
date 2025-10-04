import { motion } from "framer-motion"
import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Services = () => {
    const sections = [
        {
          title: "Influencer Matching",
          content: [
            "Finding the right influencers for your brand is critical. At Fluenzy, we go beyond just numbers — we connect your brand with influencers who genuinely resonate with your target audience.",
            "Tailored Selection: We analyze your brand’s niche, product category, and audience demographics to handpick influencers who will create authentic engagement.",
            "Diverse Influencer Pool: Our network includes micro and mid-tier influencers across multiple industries.",
            "Transparent Collaboration: Influencer rates, deliverables, and timelines are clearly defined upfront to ensure smooth execution.",
            "Performance Alignment: We prioritize influencers whose content style and engagement metrics align with your campaign goals.",
            "Outcome: Your campaigns reach the right people, in the right tone, with influencers who truly connect with your brand values."
          ]
        },
        {
          title: "Content Creation",
          content: [
            "Scroll-stopping content is the backbone of every successful influencer campaign. We ensure your brand content is not only polished but strategically designed to convert.",
            "Creative Ideation & Scripting: We transform your brief into highly engaging content concepts, scripts, and storyboards for reels, shorts, and posts.",
            "Professional Editing & Production: Our in-house editing ensures all visuals are top-quality, on-brand, and optimized for social media performance.",
            "Consistency & Quality Control: Every piece of content undergoes rigorous review before delivery to maintain a high standard and cohesive brand voice.",
            "Platform-Optimized: Content is tailored for each social platform to maximize reach, engagement, and impact.",
            "Outcome: Your brand consistently produces professional, high-quality content that stands out in crowded feeds and drives audience action."
          ]
        },
        {
          title: "Campaign Management",
          content: [
            "Executing influencer campaigns is complex. Fluenzy handles the full cycle, ensuring you get results without the operational headaches.",
            "End-to-End Workflow: From brand brief to influencer onboarding, content creation, editing, approvals, and final delivery — we manage every step.",
            "Timelines & Deliverables: We set clear milestones and track progress to make sure campaigns are delivered on time and within budget.",
            "Performance Tracking & Reporting: Campaign analytics and engagement metrics are monitored and shared with you to measure ROI.",
            "Problem-Solving & Adjustments: If something isn’t working, we quickly pivot strategies to ensure campaign objectives are met.",
            "Outcome: Hassle-free campaigns with measurable results, allowing your team to focus on core business while we handle execution."
          ]
        },
        {
          title: "Brand Strategy",
          content: [
            "Influencer marketing is only effective when it aligns with a strong brand strategy. We help SMBs build a lasting social presence with data-driven guidance.",
            "Audience & Positioning: We define your target audience, tone, and messaging to ensure every campaign resonates.",
            "Campaign Planning & Alignment: All campaigns are designed to achieve specific business objectives — awareness, engagement, or conversions.",
            "Insights & Optimization: We provide actionable feedback on campaign performance to refine your future strategies.",
            "Long-Term Growth Focus: Beyond individual campaigns, we help position your brand for sustained social media growth and influence.",
            "Outcome: Your brand campaigns are strategic, measurable, and designed for growth, not just random posts."
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
            <Badge text="For Brands" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our Services
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
           
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
           
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services
