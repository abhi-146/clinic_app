import React from "react";
import "../../styles/Terms&Conditions/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Disclaimer = () => {
  return (
    <div className="terms-container">
      <Nav />

      <section className="terms">
        <h1 className="terms__title">Disclaimer</h1>
        <p className="terms__date">Last Updated: 02/05/2025</p>

        <p className="terms__intro">
          The information provided on this website is for general informational
          purposes only. While we strive to ensure accuracy, we make no
          warranties about the completeness or reliability of the information.
        </p>

        <div className="terms__section">
          <h2 className="terms__heading">1. Medical Disclaimer</h2>
          <ul className="terms__list">
            <li>
              Our products are designed to assist individuals requiring
              artificial limb solutions. However, they should not replace
              professional medical advice. - Always consult a healthcare
              professional before purchasing or using our products.
            </li>
          </ul>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">2.Limitation of Liability</h2>
          <ul className="terms__list">
            <li>
              We are not responsible for any injury, loss, or damage resulting
              from the use of our products.
            </li>
            <li>
              The website may contain links to third-party websites; we do not
              endorse or take responsibility for their content.
            </li>
          </ul>
        </div>

        <div className="terms__section">
          <h2 className="terms__heading">3.No Guarantee of Results</h2>
          <p>
            While we provide high-quality artificial limbs, the results may vary
            based on individual needs and medical conditions.
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

export default Disclaimer;
