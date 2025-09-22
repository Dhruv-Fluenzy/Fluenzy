import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-fluenzy-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-noi font-bold text-4xl md:text-5xl text-fluenzy-black mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-fluenzy-gray mb-8">Last updated: September 21, 2025</p>

        <p className="mb-4">
          Welcome to fluenzy.in! By accessing or using our website (fluenzy.in) and related services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong >Acceptance of Terms:</strong> By using fluenzy.in’s website or services, you agree to these Terms. If you do not agree, you must not use our site or services.
          </li>
          <li>
            <strong>Services:</strong> fluenzy.in connects brands with influencers and creators. We may update, modify, or discontinue parts of our services at any time without prior notice.
          </li>
          <li>
            <strong>User Accounts:</strong> You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your login credentials. You agree to provide accurate and up-to-date information.
          </li>
          <li>
            <strong>Content:</strong> <br />
            <em>Your Content:</em> Any materials (videos, posts, etc.) you submit remain yours, but you grant fluenzy.in a non-exclusive, royalty-free license to use, display, and distribute them as part of delivering our services. <br />
            <em>Our Content:</em> All materials on this site (designs, text, graphics, etc.) are owned by or licensed to fluenzy.in. You may not use them without prior written permission.
          </li>
          <li>
            <strong>Prohibited Activities:</strong> When using our site/services, you agree not to:
            <ul className="list-disc list-inside mt-2">
              <li>Violate any laws or regulations.</li>
              <li>Impersonate any person or entity.</li>
              <li>Interfere with or disrupt the functionality of our services.</li>
              <li>Attempt unauthorized access to our systems.</li>
            </ul>
          </li>
          <li>
            <strong>Payment & Fees:</strong> If you enter into paid collaborations, campaign fees, or subscriptions with fluenzy.in, payment terms will be outlined separately in your agreement or invoice. All payments are non-refundable unless stated otherwise.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> fluenzy.in will not be liable for indirect, incidental, or consequential damages, any loss of profits, data, or business opportunities, or third-party actions, including influencers, brands, or platforms. Our liability is limited to the maximum extent permitted by law.
          </li>
          <li>
            <strong>Termination:</strong> We may suspend or terminate your access to our site/services at our discretion, with or without cause.
          </li>
          <li>
            <strong>Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of India. Any disputes shall be resolved exclusively in the courts of Guwahati, Assam.
          </li>
          <li>
            <strong>Contact Us:</strong> For any questions about these Terms, contact us at: <a href="mailto:support@fluenzy.in" className="text-fluenzy-coral">support@fluenzy.in</a>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TermsOfService;
