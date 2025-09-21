import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-fluenzy-white">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-fluenzy-black mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-fluenzy-gray mb-6">
          Last updated: 21 September, 2025
        </p>

        <p className="mb-6">
          At <strong>Fluenzy.in</strong> (“we,” “our,” “us”), we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and share
          information when you use our website{" "}
          <a
            href="https://fluenzy.in"
            className="text-fluenzy-coral underline"
          >
            fluenzy.in
          </a>{" "}
          (the “Site”) and related services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> name, email address, phone
            number, social media handles, brand details, influencer profiles.
          </li>
          <li>
            <strong>Content Information:</strong> influencer content
            submissions, brand campaign briefs, communication history.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type,
            device information, cookies, analytics data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Connect brands with influencers.</li>
          <li>Facilitate collaborations and campaigns.</li>
          <li>Improve and personalize our services.</li>
          <li>Send updates, promotional emails, and service-related communications.</li>
          <li>Ensure compliance with applicable laws.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell your personal information. We may share information
          with:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> third-party tools (e.g., email
            platforms, analytics, hosting).
          </li>
          <li>
            <strong>Business Partners:</strong> brands and influencers, only as
            necessary to facilitate collaborations.
          </li>
          <li>
            <strong>Legal & Safety:</strong> if required by law or to protect
            our rights, safety, and property.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. Cookies & Tracking</h2>
        <p className="mb-6">
          We use cookies, pixels, and analytics tools (like Google Analytics) to
          understand how visitors use our site and improve functionality. You
          can disable cookies through your browser, but some features may not
          work properly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p className="mb-6">
          We retain your information as long as necessary to provide our
          services and comply with legal obligations. You may request deletion
          of your data at any time by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="mb-4">Depending on your location, you may have rights to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access, update, or delete your information.</li>
          <li>Opt out of promotional emails.</li>
          <li>Request a copy of the data we hold about you.</li>
        </ul>
        <p className="mb-6">
          To exercise these rights, contact us at:{" "}
          <a
            href="mailto:support@fluenzy.in"
            className="text-fluenzy-coral underline"
          >
            support@fluenzy.in
          </a>
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
        <p className="mb-6">
          We use reasonable technical and organizational measures to protect
          your data, but no online system is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
        <p className="mb-6">
          Our services are not directed to children under 13 (or 16 in some
          regions). We do not knowingly collect data from children.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Updated versions
          will be posted on this page with a new “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at:
        </p>
        <p className="mt-4">
          <strong>Fluenzy.in</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:support@fluenzy.in"
            className="text-fluenzy-coral underline"
          >
            support@fluenzy.in
          </a>
          <br />
          Website:{" "}
          <a
            href="https://fluenzy.in"
            className="text-fluenzy-coral underline"
          >
            fluenzy.in
          </a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
