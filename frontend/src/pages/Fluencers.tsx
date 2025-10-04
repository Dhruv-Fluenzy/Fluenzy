import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Badge from "@/components/Badge"
import BenefitCard from "@/components/BenefitCard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { fluencersBenefits } from "@/constants"
import { ArrowRight } from "lucide-react"

const Fluencers = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <section
                id="fluencers-hero"
                className="min-h-screen w-full py-20 md:py-32 lg:py-40 overflow-hidden"
            >
                <div className="container-div">
                    <div className="hero-box-bg" />

                    {/* Heading Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <Badge text="For Fluencers" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Why Join Fluenzy?
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Connect with top brands, earn from your content, and grow your influence.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
                        className="max-w-6xl mx-auto mb-16"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fluencersBenefits.map((benefit, index) => (
                                <BenefitCard
                                    key={benefit.id}
                                    title={benefit.title}
                                    description={benefit.description}
                                    icon={benefit.icon}
                                    delay={0.1 * (index + 4)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Call to Action Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="card-border rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Ready to Join?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Apply now and start collaborating with top brands!
                            </p>                            <Link 
                                to="/fluencer-onboarding"
                                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg flex items-center gap-3 mx-auto group w-fit"
                            >
                                Apply Now
                                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <div>
                <form
                    action="https://formspree.io/f/mrbykdqd"
                    method="POST"
                >
                    <label>
                        Your email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Your message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Additional Features Section */}
            <section
                id="fluencers-features"
                className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-muted/30"
            >
                <div className="container-div">
                    <div className="hero-box-bg" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                        className="text-center max-w-4xl mx-auto mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                            What Makes Us Different?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            We're not just another influencer platform. We're your creative partners.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="card-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Professional Support
                                </h3>
                                <p className="text-muted-foreground">
                                    Our creative team works with you from concept to delivery, ensuring every piece of content meets professional standards.
                                </p>
                            </div>

                            <div className="card-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Fair Compensation
                                </h3>
                                <p className="text-muted-foreground">
                                    We believe in paying creators fairly. Transparent pricing and timely payments for all your hard work.
                                </p>
                            </div>

                            <div className="card-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Quality Brands
                                </h3>
                                <p className="text-muted-foreground">
                                    Work exclusively with vetted, premium brands that align with your values and audience.
                                </p>
                            </div>

                            <div className="card-border rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    Growth Focused
                                </h3>
                                <p className="text-muted-foreground">
                                    Every campaign is designed not just for the brand, but to help grow your personal influence and reach.
                                </p>
                            </div>
                        </div>          </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Fluencers
