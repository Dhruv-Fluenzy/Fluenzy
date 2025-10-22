import { motion } from "framer-motion";
import { useState } from "react";
import {
    ArrowRight,
    User,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    Briefcase,
    MessageSquare,
    FileText,
    Globe,
    DollarSign,
    Target,
    Clock,
    Users,
    Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

interface SalesFormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    education: string;
    experience: string;
    currentWork: string;
    salesExperience: string;
    motivation: string;
    availability: string;
    linkedinProfile: string;
    portfolio: string;
    whyFluenzy: string;
    additionalInfo: string;
}

const SalesExecutive = () => {
    const [formData, setFormData] = useState<SalesFormData>({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        education: "",
        experience: "",
        currentWork: "",
        salesExperience: "",
        motivation: "",
        availability: "",
        linkedinProfile: "",
        portfolio: "",
        whyFluenzy: "",
        additionalInfo: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const experienceLevels = [
        "0-1 years (Fresher)",
        "1-3 years",
        "3-5 years",
        "5+ years",
    ];

    const availabilityOptions = [
        "Full-time (40+ hours/week)",
        "Part-time (20-30 hours/week)",
        "Flexible hours",
        "Weekends only",
    ];

    const currentWorkOptions = [
        "Student",
        "Freelancer",
        "Currently Employed",
        "Between Jobs",
        "Entrepreneur",
        "Other",
    ];

    const handleInputChange = (field: keyof SalesFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";
        if (!formData.education.trim())
            newErrors.education = "Education details are required";
        if (!formData.experience) newErrors.experience = "Please select experience level";
        if (!formData.currentWork) newErrors.currentWork = "Please select current work status";
        if (!formData.salesExperience.trim())
            newErrors.salesExperience = "Sales experience details are required";
        if (!formData.motivation.trim())
            newErrors.motivation = "Motivation details are required";
        if (!formData.availability) newErrors.availability = "Please select availability";
        if (!formData.whyFluenzy.trim())
            newErrors.whyFluenzy = "Please tell us why you want to join Fluenzy";

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
                payload.append(key, value);
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
                        >              <div className="mb-8">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                    <Check className="w-10 h-10 text-green-600" />
                                </div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                    Application Submitted!
                                </h1>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Thank you for your interest in joining Fluenzy as a Sales Executive!
                                    Our team will review your application and get back to you within 2-3 business days.
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
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <Badge text="We're Hiring" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Join Fluenzy as a
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                                Sales Executive
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                            Commission-Based Sales Partner Opportunity
                        </p>
                    </motion.div>

                    {/* About the Role Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About the Role</h2>
                            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                                Fluenzy.in is expanding our sales network and we're looking for ambitious,
                                communication-driven individuals who can connect with brands, pitch influencer
                                marketing campaigns, and confidently close deals. This is a commission-based
                                opportunity, perfect for those who are motivated by results and want to earn based on performance.
                            </p>
                        </div>

                        {/* What You'll Do */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-primary" />
                                    What You'll Do
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Reach out to brands via email, Instagram DMs, or calls
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Pitch influencer / UGC marketing campaigns
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Close deals and onboard brands to Fluenzy
                                    </li>                  
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Coordinate with the Fluenzy team for proposals and pricing
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Maintain transparency by logging all leads in our internal Brand Mastersheet
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-primary" />
                                    Earnings
                                </h3>                <ul className="space-y-3 text-muted-foreground mb-4">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Commission-based role (no fixed salary)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Earn 5% of every confirmed deal you bring in
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        Payment released within 7 days after the brand completes payment
                                    </li>
                                </ul>
                                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                                    <p className="text-sm font-medium text-primary">💰 Example:</p>
                                    <p className="text-sm text-muted-foreground">Close a ₹50,000 deal → You earn ₹2,500</p>
                                </div>
                            </div>
                        </div>

                        {/* Who We're Looking For & Who Should Not Apply */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700">
                                    <Users className="w-5 h-5" />
                                    Who We're Looking For
                                </h3>                <ul className="space-y-2 text-green-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                        Strong communication and persuasion skills
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                        Comfortable with email, DMs, and cold outreach
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                        Motivated, consistent, and follow-up oriented
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                        Familiar with Google Sheets, Docs, and Chat (preferred)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                        Students, freelancers, or professionals looking to grow in sales, marketing, or brand partnerships
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-700">
                                    <Users className="w-5 h-5" />
                                    Who Should Not Apply
                                </h3>
                                <ul className="space-y-2 text-red-700">
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 h-4 mt-1 flex-shrink-0 text-red-500">✗</span>
                                        Anyone looking for a fixed monthly salary
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 h-4 mt-1 flex-shrink-0 text-red-500">✗</span>
                                        Those unable to commit to consistent outreach and follow-ups
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* About Fluenzy */}
                        <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 mt-8">
                            <h3 className="text-xl font-semibold mb-4 text-center">About Fluenzy.in</h3>
                            <p className="text-muted-foreground leading-relaxed text-center">
                                Fluenzy is an influencer and UGC marketing agency connecting brands with authentic
                                creators to produce high-quality, performance-driven content. We value clear
                                communication, transparency, and professionalism above all.
                            </p>
                        </div>
                    </motion.div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Apply</h2>
                            <p className="text-muted-foreground">Fill out the form below to join our sales team</p>
                        </div>

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
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.fullName ? "border-red-500" : "border-border"
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <Mail className="w-4 h-4 text-primary" />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.email ? "border-red-500" : "border-border"
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <Phone className="w-4 h-4 text-primary" />
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.phone ? "border-red-500" : "border-border"
                                            }`}
                                        placeholder="+91 9876543210"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    )}
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
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.location ? "border-red-500" : "border-border"
                                            }`}
                                        placeholder="City, State, Country"
                                    />
                                    {errors.location && (
                                        <p className="text-red-500 text-sm">{errors.location}</p>
                                    )}
                                </div>

                                {/* Education */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <GraduationCap className="w-4 h-4 text-primary" />
                                        Education *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.education}
                                        onChange={(e) => handleInputChange("education", e.target.value)}
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.education ? "border-red-500" : "border-border"
                                            }`}
                                        placeholder="Your highest qualification"
                                    />
                                    {errors.education && (
                                        <p className="text-red-500 text-sm">{errors.education}</p>
                                    )}
                                </div>

                                {/* Experience Level */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <Briefcase className="w-4 h-4 text-primary" />
                                        Experience Level *
                                    </label>
                                    <select
                                        value={formData.experience}
                                        onChange={(e) => handleInputChange("experience", e.target.value)}
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.experience ? "border-red-500" : "border-border"
                                            }`}
                                    >
                                        <option value="">Select experience level</option>
                                        {experienceLevels.map((level) => (
                                            <option key={level} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.experience && (
                                        <p className="text-red-500 text-sm">{errors.experience}</p>
                                    )}
                                </div>

                                {/* Current Work Status */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <Users className="w-4 h-4 text-primary" />
                                        Current Work Status *
                                    </label>
                                    <select
                                        value={formData.currentWork}
                                        onChange={(e) => handleInputChange("currentWork", e.target.value)}
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.currentWork ? "border-red-500" : "border-border"
                                            }`}
                                    >
                                        <option value="">Select current status</option>
                                        {currentWorkOptions.map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.currentWork && (
                                        <p className="text-red-500 text-sm">{errors.currentWork}</p>
                                    )}
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
                                        className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.availability ? "border-red-500" : "border-border"
                                            }`}
                                    >
                                        <option value="">Select availability</option>
                                        {availabilityOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.availability && (
                                        <p className="text-red-500 text-sm">{errors.availability}</p>
                                    )}
                                </div>

                                {/* LinkedIn Profile */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <Globe className="w-4 h-4 text-primary" />
                                        LinkedIn Profile (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.linkedinProfile}
                                        onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                </div>

                                {/* Portfolio/Resume */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                        <FileText className="w-4 h-4 text-primary" />
                                        Portfolio/Resume Link (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={formData.portfolio}
                                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                                        placeholder="Link to your resume or portfolio"
                                    />
                                </div>
                            </div>

                            {/* Sales Experience */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Target className="w-4 h-4 text-primary" />
                                    Sales Experience *
                                </label>
                                <textarea
                                    value={formData.salesExperience}
                                    onChange={(e) => handleInputChange("salesExperience", e.target.value)}
                                    rows={3}
                                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none ${errors.salesExperience ? "border-red-500" : "border-border"
                                        }`}
                                    placeholder="Describe your sales experience, achievements, or relevant skills..."
                                />
                                {errors.salesExperience && (
                                    <p className="text-red-500 text-sm">{errors.salesExperience}</p>
                                )}
                            </div>

                            {/* Motivation */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    What motivates you in sales? *
                                </label>
                                <textarea
                                    value={formData.motivation}
                                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                                    rows={3}
                                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none ${errors.motivation ? "border-red-500" : "border-border"
                                        }`}
                                    placeholder="What drives you to succeed in sales and achieve targets?"
                                />
                                {errors.motivation && (
                                    <p className="text-red-500 text-sm">{errors.motivation}</p>
                                )}
                            </div>

                            {/* Why Fluenzy */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    Why do you want to join Fluenzy? *
                                </label>
                                <textarea
                                    value={formData.whyFluenzy}
                                    onChange={(e) => handleInputChange("whyFluenzy", e.target.value)}
                                    rows={3}
                                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none ${errors.whyFluenzy ? "border-red-500" : "border-border"
                                        }`}
                                    placeholder="What attracts you to work with Fluenzy and this commission-based role?"
                                />
                                {errors.whyFluenzy && (
                                    <p className="text-red-500 text-sm">{errors.whyFluenzy}</p>
                                )}
                            </div>

                            {/* Additional Information */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    Additional Information (Optional)
                                </label>
                                <textarea
                                    value={formData.additionalInfo}
                                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                                    placeholder="Any additional information you'd like to share..."
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
                                            Submitting Application...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
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

export default SalesExecutive;
