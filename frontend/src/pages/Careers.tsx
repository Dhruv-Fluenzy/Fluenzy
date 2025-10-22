import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Target,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  link: string;
}

const Careers = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: "sales-executive",
      title: "Sales Executive",
      department: "Sales & Marketing",
      location: "Remote",
      type: "Commission-Based",
      experience: "0-5 years",
      description: "Join our expanding sales network as an ambitious, communication-driven individual who can connect with brands, pitch influencer marketing campaigns, and confidently close deals.",
      requirements: [
        "Strong communication and persuasion skills",
        "Comfortable with email, DMs, and cold outreach",
        "Motivated, consistent, and follow-up oriented",
        "Familiar with Google Sheets, Docs, and Chat (preferred)",
        "Students, freelancers, or professionals looking to grow in sales"
      ],
      benefits: [
        "Commission-based role - earn 5% of every confirmed deal",
        "Payment released within 7 days after brand payment",
        "Flexible working hours",
        "Remote work opportunity",
        "Growth in sales, marketing, and brand partnerships"
      ],
      link: "/sales-executive"
    }
  ];

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
            <Badge text="Join Our Team" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Build Your Career
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                with Fluenzy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Join our dynamic team and be part of revolutionizing influencer marketing. 
              We're looking for passionate individuals who want to make an impact in the digital marketing space.
            </p>
          </motion.div>

          {/* Company Culture Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Work with Fluenzy?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Growth Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in continuous learning and provide opportunities for professional development
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Collaborative Culture</h3>
                  <p className="text-sm text-muted-foreground">
                    Work with a supportive team that values transparency and open communication
                  </p>
                </div>                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Results Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Performance-based rewards and recognition for your contributions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Openings Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Current Openings</h2>
              <p className="text-muted-foreground">
                Explore exciting opportunities to grow your career with us
              </p>
            </div>

            {jobOpenings.length > 0 ? (
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {job.department}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {job.description}
                        </p>                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        {/* Requirements Preview */}
                        {/* <div className="mb-4">
                          <h4 className="font-medium mb-2 text-sm">Key Requirements:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                              >
                                <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                {req}
                              </span>
                            ))}
                            {job.requirements.length > 3 && (
                              <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-muted text-muted-foreground">
                                +{job.requirements.length - 3} more
                              </span>
                            )}
                          </div>
                        </div> */}
                      </div>

                      <div className="flex-shrink-0">
                        <Link to={job.link}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium flex items-center gap-2 shadow-lg shadow-primary/25"
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
                  <Briefcase className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No Current Openings</h3>
                <p className="text-muted-foreground mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals.
                </p>
                <p className="text-sm text-muted-foreground">
                  Follow us on social media or check back regularly for new opportunities.
                </p>
              </div>
            )}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-primary/5 border border-primary/20 rounded-xl p-8 mt-12 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Don't See a Perfect Match?</h3>
              <p className="text-muted-foreground mb-6">
                We're always interested in connecting with talented individuals. Send us your resume 
                and let us know how you'd like to contribute to Fluenzy's growth.
              </p>
              <a
                href="mailto:join@fluenzy.in"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
