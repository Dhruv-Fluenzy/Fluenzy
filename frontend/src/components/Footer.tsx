import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { footerLinks, socialLinks, legalLinks } from "../constants";

const Footer: React.FC = () => {
  const iconMap = {
    Instagram,
    Linkedin,
    Mail,
  };

  return (
    <footer className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-muted/30 border-t border-border">
      <div className="container-div">
        <div className="hero-box-bg" />

        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
          className="max-w-7xl mx-auto"
        >
          {/* Top Section - Logo and CTA */}
          <div className="text-center mb-16">
            {/* <div className="flex justify-center items-center gap-2 mb-6">
              <span className="text-2xl md:text-3xl font-bold">Fluenzy</span>
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg">
                .in
              </div>
            </div> */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your brand with scroll-stopping influencer
              content? Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/brand-onboarding"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium inline-block text-center"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <h3 className="font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            >
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => {
                  const IconComponent =
                    iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      {...(social.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-background group-hover:bg-primary/10 transition-colors duration-300">
                        <IconComponent className="size-4" />
                      </div>
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeInOut" }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  © 2025 Fluenzy.in. All rights reserved.
                </p>
              </div>{" "}
              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-muted-foreground">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
