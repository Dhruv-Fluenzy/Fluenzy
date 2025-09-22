import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-fluenzy-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-coral mb-8 leading-tight">
          Elevate Your Brand With {' '}
            <span className="text-fluenzy-black">Fluenzy</span>.
          </h2>
          
          <p className="font-inter text-xl text-fluenzy-gray mb-12 max-w-2xl mx-auto">
            Ready to elevate your brand with premium influencer content? 
            Let's discuss how we can bring your vision to life.
          </p>
          
          <button className="inline-flex items-center px-10 py-5 bg-fluenzy-black text-fluenzy-white font-inter font-semibold text-xl rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            Connect Now
            <svg className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;