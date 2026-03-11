import React from "react";
import "../../styles/Contact/index.scss";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Form from "../../components/Form";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <section className="contact-us">
        {/* Heading Section */}
        <div className="contact-us__header">
          <h1 className="contact-us__header-title">Contact Us</h1>
          <p className="contact-us__header-subtitle">
            Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a
            patient-centered approach, we're dedicated to your well-being. Trust
            us with your health and experience the difference!
          </p>
        </div>
        <div className="contact-us__content">
          <div className="contact-us__content-details">
            <div className="contact-us__content-details-item">
              <FaMapMarkerAlt className="contact-us__content-details-icon" />
              <p>
                <strong>Address:</strong> O-61, Ground Floor, Beside  Mother  Dairy
              Near  Vinobapuri  Metro Station Gate  Number - 1,
              Lajpat  Nagar  2 , New Delhi - 110024
              </p>
            </div>
            <div className="contact-us__content-details-item">
              <FaPhoneAlt className="contact-us__content-details-icon" />
              <p>
                <strong>Phone:</strong> +91-8881788788, +91-8800393472
              </p>
            </div>
            <div className="contact-us__content-details-item">
              <FaEnvelope className="contact-us__content-details-icon" />
              <p>
                <strong>Email:</strong> Director@pointernational.in,
                Rajni@pointernational.in
              </p>
            </div>
          </div>
          <div className="contact-us__content-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1272891281733!2d77.24561867549833!3d28.565940175701193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9ccdc97c8d%3A0x8e2d4326ae063c93!2sP%26O%20International%20%7C%20Artificial%20Limb%20Center!5e0!3m2!1sen!2sin!4v1735019466554!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Form />
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
