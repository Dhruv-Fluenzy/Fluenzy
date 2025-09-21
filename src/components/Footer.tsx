import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", external: true },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", external: true },
    { icon: Mail, href: "mailto:brands@fluenzy.in", label: "Email", external: false },
  ];

  return (
    <footer className="py-10 px-6 lg:px-12 bg-fluenzy-white border-t border-fluenzy-light-gray">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: © + Legal Links */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm text-fluenzy-gray text-center md:text-left">
          <p>© Fluenzy.in 2025.</p>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 mt-2 md:mt-0">
            <a href="/privacy-policy" className="hover:text-fluenzy-coral transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-fluenzy-coral transition-colors">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-fluenzy-coral transition-colors">Disclaimer</a>
            <a href="/cookie-policy" className="hover:text-fluenzy-coral transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Right side: Social icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0 justify-center md:justify-end">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="p-2 rounded-lg text-fluenzy-gray hover:text-fluenzy-coral hover:bg-fluenzy-light-gray transition-all duration-300 transform hover:-translate-y-1"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
