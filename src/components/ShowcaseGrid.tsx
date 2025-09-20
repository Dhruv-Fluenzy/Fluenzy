import React from 'react';

interface ProjectCard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ShowcaseGrid: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "Beauty Brand Launch",
      category: "Skincare",
      image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium product showcase with lifestyle integration"
    },
    {
      id: 2,
      title: "Tech Product Review",
      category: "Technology",
      image: "https://images.pexels.com/photos/17485658/pexels-photo-17485658/free-photo-of-woman-in-white-sweater-holding-smartphone.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Authentic tech reviews that drive conversions"
    },
    {
      id: 3,
      title: "Fashion Campaign",
      category: "Style",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-fashion content with editorial quality"
    },
    {
      id: 4,
      title: "Wellness Journey",
      category: "Health",
      image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Authentic wellness content that inspires action"
    },
    {
      id: 5,
      title: "Food & Lifestyle",
      category: "Culinary",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Culinary storytelling with premium aesthetics"
    },
    {
      id: 6,
      title: "Travel Experience",
      category: "Adventure",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Immersive travel content that sells experiences"
    },
  ];

  return (
    <section id="work" className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-6">
            Our Work
          </h2>
          <p className="font-inter text-xl text-fluenzy-gray max-w-2xl mx-auto">
            Fluencers create. We shape, edit and perfect. <br />
            Delivering only the content your brand deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-fluenzy-light-gray aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-fluenzy-black/0 group-hover:bg-fluenzy-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-fluenzy-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
                    <h3 className="font-noi font-bold text-2xl mb-2">{project.title}</h3>
                    <p className="font-inter text-sm mb-4 opacity-90">{project.category}</p>
                    <p className="font-inter text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGrid;