import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, User, Mail, Instagram, Users, Star, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Badge from "../components/Badge"

interface FluencerFormData {
  fullName: string
  email: string
  instagram: string
  followerCount: string
  contentNiche: string[]
  portfolioLink: string
  location: string
  availability: string
  message: string
}

const FluencerOnboarding = () => {
  const [formData, setFormData] = useState<FluencerFormData>({
    fullName: "",
    email: "",
    instagram: "",
    followerCount: "",
    contentNiche: [],
    portfolioLink: "",
    location: "",
    availability: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const followerRanges = [
    "<5K",
    "5K–10K",
    "10K–50K",
    "50K–100K",
    ">100K"
  ]

  const contentNiches = [
    "Fashion",
    "Beauty",
    "Lifestyle",
    "Fitness",
    "Food & Travel",
    "Technology",
    "Home & Decor",
    "Other"
  ]

  const availabilityOptions = [
    "Part-time",
    "Full-time", 
    "Flexible",
    "Project-based"
  ]

  const handleInputChange = (field: keyof FluencerFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleCheckboxChange = (niche: string) => {
    setFormData(prev => ({
      ...prev,
      contentNiche: prev.contentNiche.includes(niche)
        ? prev.contentNiche.filter(n => n !== niche)
        : [...prev.contentNiche, niche]
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.instagram.trim()) newErrors.instagram = "Instagram handle is required"
    if (!formData.followerCount) newErrors.followerCount = "Please select your follower count"
    if (formData.contentNiche.length === 0) newErrors.contentNiche = "Please select at least one content niche"
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!formData.availability) newErrors.availability = "Please select your availability"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("https://getform.io/f/bolzwjza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
    
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Getform submission failed:", response.statusText)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container-div">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Fluenzy!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your application has been submitted successfully. Our team will review your profile and reach out within 2-3 business days with next steps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                  >
                    Back to Home
                  </button>
                  <button 
                    onClick={() => window.location.href = '/fluencers'}
                    className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container-div">
          <div className="hero-box-bg" />
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge text="For Fluencers" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Join as a
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Fluencer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Shoot. Submit. Get paid. Fluenzy takes care of the rest.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.fullName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Instagram */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Instagram className="w-4 h-4 text-primary" />
                    Instagram *
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => handleInputChange("instagram", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.instagram ? "border-red-500" : "border-border"
                    }`}
                    placeholder="@yourusername"
                  />
                  {errors.instagram && <p className="text-red-500 text-sm">{errors.instagram}</p>}
                </div>

                {/* Follower Count */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    Follower Count *
                  </label>
                  <select
                    value={formData.followerCount}
                    onChange={(e) => handleInputChange("followerCount", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.followerCount ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select follower range</option>
                    {followerRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.followerCount && <p className="text-red-500 text-sm">{errors.followerCount}</p>}
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.location ? "border-red-500" : "border-border"
                    }`}
                    placeholder="City, Country"
                  />
                  {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Availability *
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.availability ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select availability</option>
                    {availabilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.availability && <p className="text-red-500 text-sm">{errors.availability}</p>}
                </div>

                {/* Portfolio Link */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    Sample Work / Portfolio Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioLink}
                    onChange={(e) => handleInputChange("portfolioLink", e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="https://your-portfolio.com or link to your best work"
                  />
                </div>
              </div>

              {/* Content Niche */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Star className="w-4 h-4 text-primary" />
                  Content Niche * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {contentNiches.map(niche => (
                    <label key={niche} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary/50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.contentNiche.includes(niche)}
                        onChange={() => handleCheckboxChange(niche)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <span className="text-sm text-foreground">{niche}</span>
                    </label>
                  ))}
                </div>
                {errors.contentNiche && <p className="text-red-500 text-sm">{errors.contentNiche}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us a bit about your style, past collaborations, or what makes you unique..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Applying...
                    </>
                  ) : (
                    <>
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FluencerOnboarding
