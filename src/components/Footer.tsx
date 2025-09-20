import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', external: true },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
    { icon: Mail, href: "mailto:brands@fluenzy.in", label: 'Email', external: false }
  ];

  return (
    <footer id="contact" className="py-12 px-6 lg:px-12 bg-fluenzy-white border-t border-fluenzy-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="font-inter text-fluenzy-gray">
              © Fluenzy.in 2025. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="p-3 text-fluenzy-gray hover:text-fluenzy-coral hover:bg-fluenzy-light-gray rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
