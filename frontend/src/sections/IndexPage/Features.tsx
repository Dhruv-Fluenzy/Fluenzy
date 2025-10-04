import Badge from "../../components/Badge"
import { motion } from "framer-motion"
import FeatureCard from "../../components/FeatureCard"

const Features = () => {
    return (
        <section
            id="features"
            className="min-h-screen w-full py-20 md:py-32 lg:py-40 overflow-hidden"
        >
            <div className="container-div">
                {/* heading div */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }} 

                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <Badge text="Features" />
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Everything You Need to Succeed</h2>
                    <p className="text-md md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Our comprehensive platform provides all the tools you need to streamline your workflow, boost productivity, and achieve your goals.</p>
                </motion.div>
                {/* cards div */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
                    className=""
                    >
                    <FeatureCard />
                </motion.div>
            </div>
        </section>
    )
}

export default Features