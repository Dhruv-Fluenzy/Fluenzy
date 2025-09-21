import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-fluenzy-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-6">
          Disclaimer
        </h1>
        <p className="text-sm text-fluenzy-gray mb-10">
          Last updated: September 21, 2025
        </p>

        {/* Content */}
        <div className="space-y-6 font-inter ">
          <p>
            The information, content, and services provided on fluenzy.in are for general informational purposes only. By using our website or services, you acknowledge and agree to the following:
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. No Guaranteed Results</h2>
          <p>
            Fluenzy.in connects brands with influencers and provides content creation services. We do not guarantee specific results, sales, engagement, or return on investment from any campaign. All campaign performance depends on multiple factors, including influencer audience behavior, platform algorithms, and brand execution.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Third-Party Content & Links</h2>
          <p>
            Our website may include links to third-party websites or content. Fluenzy.in is not responsible for the accuracy, legality, or content of these external sites. Accessing external sites is done at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Responsibility of Users</h2>
          <p>
            Brands and influencers are responsible for ensuring that their campaigns comply with applicable laws, regulations, and platform guidelines (e.g., ASCI, FTC, or social media rules). Users agree to not hold fluenzy.in liable for any disputes, claims, or damages arising from campaigns.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p>
            Fluenzy.in, its owners, or employees shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the site or services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Changes to this Disclaimer</h2>
          <p>
            Fluenzy.in may update this Disclaimer at any time without prior notice. The latest version will always be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have questions about this Disclaimer, contact us at: <br />
             <a href="mailto:support@fluenzy.in" className="text-fluenzy-coral hover:underline">support@fluenzy.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
