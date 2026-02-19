import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Using React Icons for the WhatsApp logo
import "../../styles/WhatsApp/index.scss"; // Import the SCSS file

const WhatsAppButton = () => {
  return (
    <a
      className="whatsapp-button-wrapper"
      href="https://api.whatsapp.com/send/?phone=918800393472&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
