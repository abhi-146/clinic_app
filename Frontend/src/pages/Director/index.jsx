import React from "react";
import Doctor from "../../assets/Home/Director/about.jpg";
import "../../styles/Director/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Director = () => {
  return (
    <div>
      <Nav />
      <div className="directorPage">
        <div className="directorPage__content">
          <div className="directorPage__content-details">
            <div className="directorPage__content-details-title">
              Welcome to P&O International Pvt. Ltd.
            </div>
            <div className="directorPage__content-details-description">
              As the director of this organization, I want to take a moment to
              personally connect with you and share our vision, values, and
              commitment to transforming lives through innovative prosthetic and
              orthotic solutions. At our Organization, we understand that losing a
              limb or experiencing mobility challenges can be a life-altering
              event. It affects not just physical abilities but also emotional
              well-being and quality of life. Our mission is to ensure that each
              individual we serve has access to the highest quality prosthetic and
              orthotic devices tailored to their unique needs. We strive to
              empower our clients to regain independence, confidence, and an
              active lifestyle.
            </div>
            <div className="directorPage__content-details-description">
              Our journey began with a simple but profound belief: that everyone
              deserves the chance to move freely and live fully. Over the years,
              we have dedicated ourselves to advancing the field of prosthetics
              and orthotics. This commitment is reflected in our state-of-the-art
              technology, our skilled team of practitioners, and our holistic
              approach to care. Today our advanced prosthetic solutions have
              helped talented athletes overcome limitations and reach the pinnacle
              of success, winning gold medals at the Para Olympics. We celebrate
              their determination and achievements.
            </div>
            <div className="directorPage__content-details-title">
              Approach & Innovation Technology
            </div>
            <div className="directorPage__content-details-description">
              The world of prosthetics and orthotics is rapidly evolving, with new
              technologies emerging that enhance both functionality and comfort.
              From advanced materials to smart technology like I-POP (Immediate
              post-operative prosthesis), Cosmetic Restoration, Facial Mask,
              Osseointegration and we are evolving into AI technologies
              (artificial intelligence) and immediate socket technology through 3D
              printing, Flat foot corrective Insoles after scanning, Robotic
              Hands. Our team of certified prosthetists and orthotists works
              closely with each client to create customized solutions that align
              with their lifestyle and goals. We emphasize collaboration,
              listening carefully to our clients’ needs, and involving them in
              every step of the process.
            </div>
            <div className="directorPage__content-details-title">
              Connect with Us
            </div>
            <div className="directorPage__content-details-description">
              Thanks for visiting our site. Please feel free to surf through our
              blog, articles, and testimonials to get ideas from those who have
              trod this way before you. Your journey means a lot to us, and we're
              here to guide you throughout your entire process, step for step.
              Let's grow together to achieve your goals and better your life.
            </div>
          </div>
          <div className="content__image">
            <img src={Doctor} alt="Director" />
            <p>
              Warm regards, Dr. Neeraj Saxena Director, P&O International Pvt.
              Ltd. director@pointernational.in
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Director;
