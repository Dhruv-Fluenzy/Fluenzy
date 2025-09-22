import React from "react";

const CookiePolicy: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-fluenzy-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="font-noi font-bold text-4xl md:text-6xl text-fluenzy-black mb-6">
          Cookie Policy
        </h1>
        <p className="text-sm text-fluenzy-gray mb-10">
          Last updated: September 21, 2025
        </p>

        {/* Content */}
        <div className="space-y-6 font-inter ">
          <p>
            Fluenzy.in (“we,” “our,” “us”) uses cookies and similar tracking technologies to improve your experience on our website. By using our site, you agree to the use of cookies as described below.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device by your browser. They help websites remember your preferences, login status, and how you interact with the site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for basic site functionality (e.g., login, page navigation).</li>
            <li><strong>Analytics / Performance Cookies:</strong> Track website usage to help us improve the site (e.g., Google Analytics).</li>
            <li><strong>Marketing / Advertising Cookies:</strong> Help us display relevant promotions or track ad campaigns.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyze site traffic and performance.</li>
            <li>Improve website functionality and user experience.</li>
            <li>Tailor content and promotions to user interests.</li>
            <li>Measure effectiveness of marketing campaigns.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p>
            We may use third-party services such as Google Analytics, Meta Pixel, or advertising networks that set their own cookies. Fluenzy.in is not responsible for how third parties handle data.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
          <p>
            You can control or disable cookies via your browser settings. Note that disabling cookies may affect the functionality of the site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Updated versions will be posted on this page with a new “Last updated” date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            For questions regarding our Cookie Policy, contact us at: <br />
            <a href="mailto:support@fluenzy.in" className="text-fluenzy-coral hover:underline">support@fluenzy.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
