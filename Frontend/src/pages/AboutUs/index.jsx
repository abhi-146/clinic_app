import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "../../styles/AboutUs/index.scss";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";
// Custom styles for the About Us page

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <section className="about-us">
        <div className="about-us__context">
          <h1 className="about-us__context_title">
            Welcome to P&O International
          </h1>
        </div>
        <div class="service__grid">
          <div class="service__card">
            <span className="icon">
              <FaLocationDot />
            </span>
            <h4>5+ Braches</h4>
            <p>
              Our organization boasts of operating more than 5 branches that
              strive to offer outstanding service and care. With the strong
              commitment of accessibility, our resources reach out to different
              communities effectively.
            </p>
          </div>
          <div class="service__card">
            <span className="icon">
              <MdOutlineReviews />
            </span>
            <h4>25,000+ Satisfied Clients</h4>
            <p>
              Our organization has served over 25,000 satisfied clients, all
              with a strong commitment to outstanding service and beyond
              expectations. We take pride in building lasting relationships,
              offering tailored solutions, and ensuring client satisfaction at
              every step.
            </p>
          </div>
          <div class="service__card">
            <span className="icon">
              <MdOutlineSentimentVerySatisfied />
            </span>
            <h4>98% + Client Satisfacation Rate</h4>
            <p>
              Our organization is proud to maintain a 98%+ client satisfaction
              rate, which is a testament to our commitment to excellence. We
              focus on understanding and meeting the unique needs of each
              client, ensuring exceptional service and results.
            </p>
          </div>
        </div>
        <div className="about-us__context">
          <p className="about-us__context_subtitle">
            Enhance lives with innovation, compassion, and excellence in
            prosthetics and orthotics- that's the commitment P&O International
            offers. The company was formed to be the market leader for
            prosthetic design, fabrication, and fitting. In this business, we
            assist clients in returning to their lifestyles and independence as
            confidently as possible through custom-made prosthetic limbs and
            orthotic solutions.
          </p>
        </div>
        <div className="about-us__context">
          <p className="about-us__context_subtitle">
            But at P&O International, we believe that providing physical
            solutions is only part of our mission. We understand the emotional
            and psychological impact of limb loss or physical disability, which
            is why we offer holistic support, including counseling,
            rehabilitation, and peer support programs. Our goal is not just to
            restore mobility but to empower our clients to lead full and active
            lives.
          </p>
        </div>
        <div className="about-us__context">
          <p className="about-us__context_subtitle">
            Our range of services begins from fitting orthoses that are simpler
            in nature, right down to complex prosthetic systems designed from
            scratch for individuals. We do take pride in being able to help in
            almost all complicated cases, be it a hip disarticulation prosthesis
            or hemipelvectomy prosthesis. From a perspective of quality and
            perfection, each of the products made would face tough tests for
            their efficacy and stability.
          </p>
        </div>
        <div className="about-us__context">
          <p className="about-us__context_subtitle">
            We are proud to be at the forefront of the prosthetics and orthotics
            industry in India, with a growing network of clinics and service
            centers dedicated to providing exceptional care and support. Whether
            you are seeking a prosthetic limb, an orthotic brace, or cosmetic
            restoration, P&O International is here to help you every step of the
            way.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
