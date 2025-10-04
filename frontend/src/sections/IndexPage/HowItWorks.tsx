import Badge from "../../components/Badge"
import { motion } from "framer-motion"
import StepCard from "../../components/StepCard"

const HowItWorks = () => {
    return (
        <section
            id="how-it-works"
            className="bg-muted/30 relative w-full py-10 md:py-20 lg:py-32 overflow-hidden"
        >
            <div className="container-div">
                <div className="hero-box-bg" />
                {/* heading div */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <Badge text="How It Works" />
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Simple process, polished results. </h2>
                    <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Get started in minutes and see how Fluenzy can elevate your brand content.</p>
                </motion.div>
                {/* Workflow div */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}>
                        <StepCard />
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorks