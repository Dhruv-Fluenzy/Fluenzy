import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-noi font-bold text-5xl md:text-7xl lg:text-8xl text-fluenzy-black leading-tight mb-8 tracking-tight">
            Fluencers
            <span className="text-fluenzy-coral"> create.</span>
            {' '}
            <div className='block'>             Fluenzy <span className="text-fluenzy-coral"> shapes.</span>
              {' '}</div>

            Brand
            <span className="text-fluenzy-coral"> wins.</span>
          </h1>

          <p className="font-inter text-xl md:text-2xl text-fluenzy-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Brands get polished influencer content. Influencers just shoot. We handle everything in between.
          </p>

          <button className="inline-flex items-center px-8 py-4 bg-fluenzy-coral text-fluenzy-white font-inter font-semibold text-lg rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            View Our Work
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;