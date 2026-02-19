import React, { useState, useEffect } from "react";
import "../../../styles/Home/Service/index.scss";
import ServicesImg from "../../../assets/Services/Hand Orthotics.jpeg";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiMicroscopeLine } from "react-icons/ri";
import { RiHospitalLine } from "react-icons/ri";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "Losing a limb can be a life-changing experience, but it shouldn't limit your ability to live a fulfilling and active life. At P&O International, we commit ourselves to providing advanced lower limb prosthetic solutions to empower individuals to regain mobility, independence, and confidence.",
      imgSrc: ServicesImg,
    },
    {
      id: 2,
      name: "Advanced Prosthetics",
      description:
        "The loss of an upper limb can be a real challenge, challenging both daily activities and the quality of life. P&O International is committed to offering advanced solutions for upper limb prosthetics in terms of functionality, independence, and confidence.",
      imgSrc: ServicesImg,
    },
  ];

  const [showModal, setShowModal] = useState(false)

  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const handleModal = () => {
    setShowModal(true)
  }


  return (
    <section className="service">
      <h2 className="service__heading">Our Special service</h2>
      <p className="service__subheading">
        P&O International specializes in advanced prosthetic upper limb
        prosthetics, such as customized sockets designed for comfort. Our lower
        limb prosthesis solutions include artificial prosthesis and lifelike
        prosthetic hands to help regain functionality and independency in life.
      </p>
      <div class="service__grid">
        <div class="service__card">
          <span>
            <RiMentalHealthLine />
          </span>
          <h4>MAT-SCAN TECHNOLOGY</h4>
          <p>
            P&O International now merges advanced MAT-Scan Technology in the
            development and manufacturing of upper and lower limb prosthetics
            for enhanced accuracy. This state-of-the-art technology utilizes
            detailed pressure distribution as well as foot dynamics to create a
            perfectly aligned and comfortable prosthetic solution that will
            maximize any patient's performance and function.
          </p>
        </div>
        <div class="service__card">
          <span>
            <RiMicroscopeLine />
          </span>
          <h4>Pediatric Evaluation</h4>
          <p>
            P&O International specializes in pediatric evaluation for customized
            limb prosthetics, ensuring optimal fit, comfort, and functionality
            for growing children. Our expert team focuses on personalized care,
            advanced technology, and compassionate support to help young
            individuals achieve mobility, confidence, and an improved quality of
            life.
          </p>
        </div>
        <div class="service__card">
          <span>
            <RiHospitalLine />
          </span>
          <h4>ANAPLASTOLOGY</h4>
          <p>
            P&O International offers anaplastology services to create realistic
            prosthetic solutions for facial and body restoration. Our advanced
            techniques are easily integrated with limb prosthetics, providing a
            natural aesthetic and functionality. Trust our specialized team to
            provide personalized care and cutting-edge technology for
            life-changing results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
