import React, { useState } from "react";
import "../../../styles/Home/Team/index.scss";
import DoctorImg1 from "../../../assets/Home/Team/doctor-1.jpg";
import DoctorImg2 from "../../../assets/Home/Team/doctor-2.jpg";
import DoctorImg3 from "../../../assets/Home/Team/doctor-3.jpg";
import DoctorImg4 from "../../../assets/Home/Team/doctor-4.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ms. Anupama",
      designation: "General Manager",
      imgSrc: DoctorImg1,
    },
    {
      id: 2,
      name: "Viplav Tyagi",
      designation: "P&O Professionals",
      imgSrc: DoctorImg2,
    },
    {
      id: 3,
      name: "Vaibhav Singh Rajput",
      designation: "P&O Professionals",
      imgSrc: DoctorImg3,
    },
    { id: 4, name: "Maninder Kaur", designation: "P&O Professionals", imgSrc: DoctorImg4 },
  ];


  return (
    <section className="professional">
      <div className="professional__headingWrap">
        <h2 className="professional__headingWrap-heading">Team of Professionals</h2>
        <p className="professional__headingWrap-subheading">
          We are proud to be at the forefront of the prosthetics and orthotics industry in India,
          with a growing network of clinics and service centers dedicated to providing exceptional care and support.
        </p>
      </div>
      <div className="professional__infoCard">
        {teamMembers.map((members) => (
          <div className="professional__infoCard-card" key={members.id}>
            <img src={members.imgSrc} alt="doctor" className="professional__infoCard-card-img" />
            <div className="professional__infoCard-card-details">
              <h2 className="professional__infoCard-card-details-name">{members.name}</h2>
              <p className="professional__infoCard-card-details-designation">{members.designation}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Team;
