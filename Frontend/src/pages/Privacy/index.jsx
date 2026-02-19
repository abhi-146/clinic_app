import React from "react";
import "../../styles/Terms&Conditions/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Privacy = () => {
  return (
    <div className="terms-container">
      <Nav />

      <section className="terms">
        <h1 className="terms__title">Privacy Policy</h1>
        <p className="terms__date">Last Updated: 02/05/2025</p>

        <p className="terms__intro">
          At P & O International, we prioritize the privacy of our customers.
          This Privacy Policy outlines how we collect, use, and protect your
          information.
        </p>

        <div className="terms__section">
          <h2 className="terms__heading">1. Information We Collect</h2>
          <ul className="terms__list">
            <li>
              Personal details (name, email, phone number) provided during
              inquiries or purchases.
            </li>
            <li>Payment information for processing transactions securely.</li>
            <li>Website usage data through cookies and analytics tools.</li>
          </ul>
        </div>
        <div className="terms__section">
          <h2 className="terms__heading">2.How We Use Your Information</h2>
          <ul className="terms__list">
            <li>To process orders and provide customer support.</li>
            <li>To improve our products and services.</li>
            <li>To send promotional offers, if you opt-in.</li>
          </ul>
        </div>
        <div className="terms__section">
          <h2 className="terms__heading">3.Data Protection</h2>
          <ul className="terms__list">
            <li>We implement security measures to protect your data.</li>
            <li>
              Your personal information is not shared with third parties except
              as required by law.
            </li>
          </ul>
        </div>
        <div className="terms__section">
          <h2 className="terms__heading">4. Your Rights</h2>
          <ul className="terms__list">
            <li>
              You can request access, correction, or deletion of your personal
              data
            </li>
            <li>ou may opt out of marketing communications at any time.</li>
          </ul>
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

export default Privacy;
