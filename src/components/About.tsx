import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-8">
            What We Do.
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-fluenzy-gray leading-relaxed font-inter">
            <p>
              We partner with ambitious brands to create influencer content that doesn't just look beautiful—it performs. 
              Every video, post, and story is strategically crafted to drive engagement and conversions.
            </p>
            
            <p>
              Our team of creative professionals understands the nuances of different platforms and audiences, 
              ensuring your message resonates authentically while maintaining the polish your premium brand deserves.
            </p>
            
            <p>
              From concept to delivery, we handle every detail so you can focus on what matters most: 
              growing your business with content that truly connects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;