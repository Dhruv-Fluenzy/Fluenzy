import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SimpleHeroHeading from "../../components/SimpleHeroHeading";
import ParticleBackground from "../../components/ParticleBackground";
import StatsGrid from "../../components/StatsGrid";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full py-20 md:py-32 lg:py-40 overflow-hidden"
    >
      {" "}
      <div className=" container-div">
        <div className="hero-box-bg" />
        <ParticleBackground />

        {/* first div */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center max-w-4xl mx-auto mb-12 relative z-10"
        >
          {" "}
          <div className="mt-6 relative">
            <SimpleHeroHeading />
          </div>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            Brands get polished, scroll-stopping influencer content. Influencers
            simply shoot and focus on their creativity. We handle everything in
            between from concept to delivery so everyone wins and the process is
            effortless.
          </motion.p>{" "}
          <motion.div
            className="flex flex-col gap-4 w-full sm:flex-row sm:justify-center sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                to="/all-work"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium inline-block text-center w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </motion.div>{" "}
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                to="/brand-onboarding"
                className="bg-white text-primary px-8 py-3 rounded-lg  transition-colors duration-300 font-medium inline-block text-center border border-primary w-full sm:w-auto"
              >
                Book A Call
              </Link>
            </motion.div>
          </motion.div>{" "}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
          </motion.div>
          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeInOut" }}
            className="mt-12"
          >
            <StatsGrid />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
