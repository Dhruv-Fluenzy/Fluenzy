import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-8 text-center">
            What We Do.
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-fluenzy-gray leading-relaxed font-inter text-justify">
            <p>
              We help ambitious D2C brands create influencer content that does not just look good but also delivers results. Every reel, post and story is crafted to engage your audience and drive real growth.
            </p>
            
            <p>
              We connect you with the right influencers for your brand and handle everything from concept and scripting to editing and delivery. Our team ensures your message lands authentically while keeping a polished, scroll-stopping look.
            </p>
            
            <p>
              From start to finish, we manage the process so you can focus on growing your business while we turn influencer content into real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
