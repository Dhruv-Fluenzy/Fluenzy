import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import SimpleHeroHeading from "../../components/SimpleHeroHeading";
import ParticleBackground from "../../components/ParticleBackground";
// import HeroHeading from "../../components/HeroHeading" // Complex version with gradients
// import AnimationShowcase from "../../components/AnimationShowcase" // For testing different animations
import { Check, Star } from "lucide-react";
import Button from "../../components/Button";
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
            {/* Divider */}
            {/* <div className="hidden sm:block w-px h-4 bg-border"></div> */}

            {/* Rating */}
            {/* <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-muted-foreground">Rated 5.0 by 100+ brands</span>
            </div> */}
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
        {/* Image div */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="text-center mx-auto max-w-6xl  shadow-md rounded-lg overflow-hidden "
        >
          <img src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center" alt="hero" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
