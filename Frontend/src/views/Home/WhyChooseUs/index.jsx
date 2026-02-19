import React, { useState } from "react";
import "../../../styles/_main.scss";
import "../../../styles/Home/WhyChooseUs/index.scss";
import DoctorImg from "../../../assets/Home/WhyChooseUs/choose-us.jpg";
import { FaStethoscope } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";

const WhyChooseUs = () => {
  const data = [
    {
      icon: <FaStethoscope />,
      heading: "ADVANCED PROSTHETICS",
      subheading:
        "Advanced prosthetics in CAP integrates cutting-edge technology, including 3D printing and smart sensors, to create highly functional, personalized solutions that enhance mobility, comfort, and overall quality of life for patients.",
    },
    {
      icon: <FaHandHoldingHeart />,
      heading: "INNOVATION and CUSTOMIZED ORTHOTICS",
      subheading:
        "Innovation in customized orthotics under CAP focuses on personalized, precision-fit solutions using advanced materials and 3D printing. These orthotics improve comfort, mobility, and overall patient outcomes, tailored to individual needs.",
    },
    {
      icon: <FaHeartPulse />,
      heading: "COSMETIC RESTORATION",
      subheading:
        "Cosmetic restoration in CAP involves advanced techniques to restore natural appearance, focusing on dental and skin procedures. Utilizing innovative materials and technologies, it enhances aesthetics while maintaining function and patient satisfaction.",
    },
    {
      icon: <MdHealthAndSafety />,
      heading: "LATEST MACHINE and EQUIPMENT OR CLINICAL LABS",
      subheading:
        "Recent advancements in clinical lab equipment, approved by CAP (College of American Pathologists), include automated liquid handlers, next-gen sequencing platforms, and AI-driven diagnostic tools. Key players include Roche, Abbott, and Siemens, offering cutting-edge solutions for labs worldwide.",
    },
  ];

  const [showDesc, setShowDesc] = useState(null);

  const handleCards = (i) => {
    setShowDesc((prevIndex) => (prevIndex === i ? null : i)); // Toggle selection
  };

  return (
    <section className="whyChooseUs">
      <h2 className="whyChooseUs__heading">Why Choose Us</h2>
      <p className="whyChooseUs__subheading">
        As we look forward, our core values of integrity, compassion, and
        excellence shall continue to guide us. Our vision is to make continual
        services improvements, and grow our reach, while constantly making use
        of the advancing technology to attain the changing needs of our
        customers.
      </p>
      <div className="whyChooseUs__infoWrap">
        <div className="whyChooseUs__infoWrap-lhs">
          <img
            src={DoctorImg}
            alt="doctor"
            className="whyChooseUs__infoWrap-lhs-img"
          />
          <p className="whyChooseUs__infoWrap-lhs-designation">
            Warm regards,
            <br />
            Dr. Kuldeep Kar,
            <br />
            Chief of Clinical Service(Patient Care),
            <br />
            P&O International Pvt. Ltd.
          </p>
        </div>
        <div className="whyChooseUs__descWrap ">
          {data.map((val, i) => (
            <div
              className={`whyChooseUs__descWrap-card ${
                showDesc === i ? "showDesc" : ""
              }`}
              key={i}
              onClick={() => handleCards(i)}
            >
              <div className="whyChooseUs__descWrap-cardLogo">{val.icon}</div>
              <h3 className="whyChooseUs__descWrap-cardHeading">
                {val.heading}
              </h3>
              {showDesc === i && (
                <p className="whyChooseUs__descWrap-cardSubheading">
                  {val.subheading}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
