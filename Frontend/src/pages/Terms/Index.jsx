import React from "react";
import "../../styles/Terms&Conditions/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";


const Terms = () => {
  return (
    <div className="terms-container">
      <Nav />

      <section className="terms">
        <h1 className="terms__title">Terms and Conditions</h1>
        <p className="terms__date">Last Updated: 02/05/2025</p>

        <p className="terms__intro">
          Welcome to <strong>P&OInternational</strong>. These Terms and
          Conditions govern your use of our website and services. By accessing
          our website, you agree to comply with these terms.
        </p>

        <div className="terms__section">
          <h2 className="terms__heading">1. Company Information</h2>
          <p>
            The business was established in 1999 and became a private limited
            company in 2016. We specialize in providing high-quality artificial
            limbs, including feet, arms, hands, knee solutions, bebionic hands,
            and limbs.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">2. Use of Services</h2>
          <p>
            Our products and services are for individuals seeking artificial
            limb solutions. You agree to use our website only for lawful
            purposes and not for any fraudulent activities.
          </p>
        </div>
        <div className="terms__section">
          <h2 className="terms__heading">3. Intellectual Property</h2>
          <p>
            All content on this website, including images, text, and designs, is
            owned by or licensed to <strong>P&OInternational</strong>.
            Unauthorized use is prohibited.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">4. Payment & Orders</h2>
          <p>Orders placed through our website are subject to availability and acceptance.Payments must be made in full before product dispatch.</p>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">5. Liability Disclaimer</h2>
          <p>
            While we strive to provide the best quality products, we do not
            guarantee that our products will meet every individual's specific
            medical needs.
          </p>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">6. Amendments</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Continued use of our website implies acceptance of any
            changes.
          </p>
        </div>

        <p className="terms__contact">
          For any questions, contact us at{" "}
          <strong>info@pointernational.in</strong>
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
