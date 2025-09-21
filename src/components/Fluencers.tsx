import React from "react";
import { Users, DollarSign, TrendingUp, Star } from "lucide-react";

const influencerBenefits = [
  {
    icon: Users,
    title: "Easy Workflow",
    description:
      "Manage briefs, deliverables, and approvals in one simple dashboard.",
  },
  {
    icon: DollarSign,
    title: "Earn with Brand Deals",
    description: "Work with top brands and get paid fairly per campaign.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Reach",
    description:
      "Boost your followers and engagement with professional campaigns.",
  },
  {
    icon: Star,
    title: "Showcase Your Work",
    description:
      "Get featured in campaigns that highlight your skills and creativity.",
  },
];

const Influencers: React.FC = () => {
  return (
    <section className="mt-12 py-20 px-6 lg:px-12 bg-fluenzy-white min-h-screen">
      {/* Hero / Intro */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="font-noi font-bold text-4xl md:text-6xl mb-6">
          <span className="text-fluenzy-coral">Why Join </span>
          <span className="text-fluenzy-black">Fluenzy?</span>
        </h1>
        <p className="font-inter text-xl text-fluenzy-gray max-w-2xl mx-auto">
          Connect with top brands, earn from your content, and grow your
          influence.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {influencerBenefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-center bg-fluenzy-light-gray/10 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <benefit.icon className="w-10 h-10 text-fluenzy-coral mb-4" />
            <h3 className="font-inter font-semibold text-lg text-fluenzy-black mb-2 text-center">
              {benefit.title}
            </h3>
            <p className="font-inter text-sm text-fluenzy-gray text-center">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-fluenzy-coral rounded-xl p-10 max-w-4xl mx-auto text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="font-noi text-3xl md:text-4xl text-fluenzy-white font-bold mb-4">
          Ready to Join?
        </h3>
        <p className="font-inter text-lg md:text-xl text-fluenzy-white mb-6">
          Apply now and start collaborating with top brands!
        </p>
        <a
          href="mailto:influencers@fluenzy.in"
          className="inline-block px-8 py-4 bg-fluenzy-white text-fluenzy-coral font-inter font-semibold text-lg rounded-lg hover:bg-fluenzy-light-gray transition-all duration-300"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Influencers;
