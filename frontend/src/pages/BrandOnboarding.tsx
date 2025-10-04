import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Mail,
  Globe,
  Target,
  DollarSign,
  Clock,
  MessageSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

interface BrandFormData {
  fullName: string;
  workEmail: string;
  brandName: string;
  website: string;
  instaHandle: string;
  industry: string;
  campaignGoals: string[];
  budgetRange: string;
  timeline: string;
  message: string;
}

const BrandOnboarding = () => {
  const [formData, setFormData] = useState<BrandFormData>({
    fullName: "",
    workEmail: "",
    brandName: "",
    website: "",
    instaHandle: "",
    industry: "",
    campaignGoals: [],
    budgetRange: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const industries = ["Fashion", "Beauty & Lifestyle", "Other"];

  const campaignGoalOptions = [
    "Brand Awareness",
    "Sales Conversions",
    "New Launch",
    "Festive Offers",
    "Social Media Growth",
    "Other",
  ];

  const budgetRanges = ["<₹25K", "₹25K–₹50K", "₹50K–₹75K", ">₹75K"];

  const timelines = ["ASAP", "2–4 days", "1–2 weeks", "Flexible"];

  const handleInputChange = (field: keyof BrandFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleCheckboxChange = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      campaignGoals: prev.campaignGoals.includes(goal)
        ? prev.campaignGoals.filter((g) => g !== goal)
        : [...prev.campaignGoals, goal],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.workEmail.trim())
      newErrors.workEmail = "Work email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.workEmail))
      newErrors.workEmail = "Invalid email format";
    if (!formData.brandName.trim())
      newErrors.brandName = "Brand name is required";
    if (!formData.website.trim())
      newErrors.websiteOrHandle = "Website is required";
    if (!formData.instaHandle.trim())
      newErrors.websiteOrHandle = "Instagram handle is required";
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (formData.campaignGoals.length === 0)
      newErrors.campaignGoals = "Please select at least one campaign goal";
    if (!formData.budgetRange)
      newErrors.budgetRange = "Please select a budget range";
    if (!formData.timeline) newErrors.timeline = "Please select a timeline";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => payload.append(key, v));
        } else {
          payload.append(key, value);
        }
      });
  
      const response = await fetch("https://getform.io/f/bolzwjza", {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const text = await response.text();
        console.error("Form submission failed:", text);
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Thank You!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your brand brief has been submitted successfully. Our team
                  will review your requirements and get back to you within 24
                  hours with a customized proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={() => (window.location.href = "/all-work")}
                    className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
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
            <Badge text="For Brands" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Work with
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Fluenzy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about your brand and campaign goals. We'll match you with
              the right Fluencers and deliver polished content.
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
                    <Building2 className="w-4 h-4 text-primary" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.fullName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) =>
                      handleInputChange("workEmail", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.workEmail ? "border-red-500" : "border-border"
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.workEmail && (
                    <p className="text-red-500 text-sm">{errors.workEmail}</p>
                  )}
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Building2 className="w-4 h-4 text-primary" />
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) =>
                      handleInputChange("brandName", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.brandName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your brand name"
                  />
                  {errors.brandName && (
                    <p className="text-red-500 text-sm">{errors.brandName}</p>
                  )}
                </div>

                {/* Website*/}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Globe className="w-4 h-4 text-primary" />
                    Website *
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.websiteOrHandle
                        ? "border-red-500"
                        : "border-border"
                    }`}
                    placeholder="www.yourbrand.com"
                  />
                  {errors.websiteOrHandle && (
                    <p className="text-red-500 text-sm">
                      {errors.websiteOrHandle}
                    </p>
                  )}
                </div>

                {/* Instagram Handle */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Globe className="w-4 h-4 text-primary" />
                    Instagram Handle *
                  </label>
                  <input
                    type="text"
                    value={formData.instaHandle}
                    onChange={(e) =>
                      handleInputChange("instaHandle", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.websiteOrHandle
                        ? "border-red-500"
                        : "border-border"
                    }`}
                    placeholder="@yourbrand"
                  />
                  {errors.websiteOrHandle && (
                    <p className="text-red-500 text-sm">
                      {errors.websiteOrHandle}
                    </p>
                  )}
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Target className="w-4 h-4 text-primary" />
                    Industry / Category *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.industry ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm">{errors.industry}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Budget Range *
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) =>
                      handleInputChange("budgetRange", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.budgetRange ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="text-red-500 text-sm">{errors.budgetRange}</p>
                  )}
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Timeline *
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.timeline ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="text-red-500 text-sm">{errors.timeline}</p>
                  )}
                </div>
              </div>

              {/* Campaign Goals */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Target className="w-4 h-4 text-primary" />
                  Campaign Goal * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {campaignGoalOptions.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:border-primary/50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.campaignGoals.includes(goal)}
                        onChange={() => handleCheckboxChange(goal)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                      />
                      <span className="text-sm text-foreground">{goal}</span>
                    </label>
                  ))}
                </div>
                {errors.campaignGoals && (
                  <p className="text-red-500 text-sm">{errors.campaignGoals}</p>
                )}
              </div>

              {/* Message/Brief */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Message / Brief (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your campaign goals, target audience, or any specific requirements..."
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Brief
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
  );
};

export default BrandOnboarding;
