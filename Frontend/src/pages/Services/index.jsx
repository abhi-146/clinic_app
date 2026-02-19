import React, { useState } from "react";
import "../../styles/Services/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import "../../styles/Home/Army/index.scss";
import ServicesImg1 from "../../assets/Services/Prosthesis for Lower Limb.jpeg";
import ServicesImg2 from "../../assets/Services/Prosthesis for Upper Limb.jpeg";
import ServicesImg3 from "../../assets/Services/Cosmetic Restoration.jpeg";
import ServicesImg4 from "../../assets/Services/Robotic-Multi-Articulating Hand.jpg";
import ServicesImg5 from "../../assets/Services/Orthotic-Products.jpg";
import ServicesImg6 from "../../assets/Services/Pediatric Orthotics.jpeg";
import ServicesImg7 from "../../assets/Services/Spinal Orthotics.jpeg";
import ServicesImg8 from "../../assets/Services/Upper Extremity Orthotics.jpeg";
import ServicesImg9 from "../../assets/Services/Hand Orthotics.jpeg";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  // Disable scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleModal = () => {
    setShowModal(true);
  };

  const services = [
    {
      id: 1,
      name: "Prosthesis for Lower Limb",
      description:
        "P&O International provides advanced solutions for lower limb prosthetics to regain mobility, independence, and confidence in the individuals. With a number of years of experience, focusing on the individual needs of every client, they provide all services. These include initial consultation and assessment, design of custom prosthetics, rehabilitation support, and continuous care and maintenance.The company, P&O International designs and manufactures prosthetic solutions with the use of advanced technologies to create lightweight, durable material designs mimicking natural movement.ThisArtificial Leg in India is determined by the type of prosthesis, the level of technology involved, aspects of customization and comfort, and estimated costs in a consultation room.Key features of P&O International prosthetics include a customized fit, advanced materials, hydraulic, and microprocessor knee joints, realistic aesthetics to resemble natural limbs, and adaptability to numerous activities. They strive for prosthetic products that allow them to live and be active precisely and personally in a natural setting. P&O International provides a trusted aid in helping those achieve comfort, stability, and independence. Please visit P&O International, where you can experience prosthetic solutions designed just for you, whether in search of the best artificial leg in India or a reliable prosthesis centre for lower limb in India.",
      imgSrc: ServicesImg1,
    },
    {
      id: 2,
      name: "Prosthesis for Upper Limb",
      description:
        "P&O International is focused on delivering superior solutions for upper limb prosthetics to enhance functionality, independence, and confidence. The services they offer are all based on the needs and goals of each individual in order to give them the best possible prosthesis for their needs. They take time to understand their lifestyle and objectives during a detailed evaluation process, design custom prostheses using advanced materials and technology, ensure precision fitting and adjustment, provide training and rehabilitation support, and offer ongoing care and support.P&O International restores function and provides the close approximation of appearance and movement of an upper limb as seen with a living limb through state-of-the-art technology in the form of body-powered and myoelectric prostheses and advanced bionic systems. Their prosthetics let users perform a variety of movements and actions, hence regaining independence and confidence.P&O International's team of experienced professionals, client-centered approach, and commitment to quality ensure the highest standards of craftsmanship and service from design to delivery. Contact them today to schedule a consultation and discover how they can help you reach your goals.",
      imgSrc: ServicesImg2,
    },
    {
      id: 3,
      name: "Cosmetic Restoration",
      description:
        "P&O International is a company that specializes in Cosmetic Restoration, a service that aims to restore the natural appearance and function of body parts lost due to injury, illness, or congenital conditions. Combining advanced medical techniques with an artistic approach, they create prostheses that not only replicate the natural appearance but also help individuals regain confidence and quality of life. Cosmetic restorations are used usually for facial features, fingers, toes, ears, and facial features but can be specially created for nearly any part of the body.The prosthesis is handcrafted to match a patient's skin tone, texture, and all their other unique anatomical details and is made of high-quality, medical-grade silicone. They also provide functional integration, natural movement, and treatments to minimize scars and skin discoloration. The company's team is made up of skilled artisans who specialize in the creation of prosthetics that are virtually indistinguishable from natural body parts. They provide discreet and confidential service, and offer ongoing support, including adjustments and maintenance, to ensure the prosthesis remains in optimal condition.",
      imgSrc: ServicesImg3,
    },
    {
      id: 4,
      name: "Robotic/Multi-Articulating Hand",
      description:
        "P&O International is the leading provider of robotic and multi-articulating hand prosthetics, designed to mimic the natural movements of the human hand, giving users confidence to perform any task. Advanced devices are not just tools, but life-changing solutions that make it possible for users to accomplish their goals. P&O's robotic and multi-articulating prosthetics feature revolutionary technology such as myoelectric control, multiple grip patterns, advanced haptic feedback systems, and lightweight, durable materials.P&O International provides customized solutions for every user's needs, which means the services they offer cater to those unique needs of the users. These include detailed assessments, design and manufacture, fit and training, and ongoing support and maintenance. The companies guarantee innovation and expertise in high-tech prosthetic solutions, thereby always staying up to date with the most recent technology.P&O International's commitment to innovation allows it to provide its clients with the best solutions. This way, they can help them rediscover the joy of movement and precision. Contact them today to learn more and take the first step towards an enhanced quality of life.",
      imgSrc: ServicesImg4,
    },
    {
      id: 5,
      name: "Orthotic Product",
      description:
        "P&O International focuses on improving mobility, comfort, and quality of life through the wide range of orthotic products they offer. Their services comprise custom-made foot orthotics, knee and ankle braces, spinal orthoses, upper limb orthotics, and pediatric orthotics. Their procedure is holistic and client-centered with a comprehensive review of the client's condition, lifestyle, and goals.The company is advanced in terms of technology; all orthotics have been customized towards comfort, strength, and excellence in functionality. The orthosis is adjusted well and fits functionally so as to fit an individual; train and educate that person about usage and proper upkeep of the said device, visitation with respect to adjusting devices to perfect operational status.Innovation at P&O International assures the orthotics it delivers as light in weight, strong, and also an attractive piece. 3D scanning and printing are among its modern materials it has utilized.P&O International specializes in high professionalism and customized solutions as well as their guarantee to the product. P&O International advises patients to begin to get more mobile with their services through the provision of their orthotics product services.",
      imgSrc: ServicesImg5,
    },
    {
      id: 6,
      name: "Pediatric Orthotics",
      description:
        "P&O International is a leading provider of pediatric orthotics services with an emphasis on early intervention and individualized care for children. Their services include foot and ankle orthotics, spinal orthotics, upper limb orthotics, custom helmets, and sports orthotics. They offer a child-centered approach by providing comprehensive assessments, custom design and fabrication, gentle fitting and adjustment, ongoing support and monitoring, and education for parents and caregivers.Pediatric orthotics can significantly improve a child's mobility, independence, growth and alignment, prevention of complications or deformity, posture and balance, and increased participation in daily activities. P&O International's experienced pediatric specialists design and fit devices using lightweight and durable materials that mimic the natural movement of the leg. They also create a positive environment for children and families, creating a positive environment where they feel comfortable visiting.The mission of P&O International is to help the child reach his or her maximum potential in life by providing specific solutions that would enhance mobility and correct alignment. Their goal is to help the child step into their future confidently with their orthotics needs. Contact them today to schedule a consultation and learn more about their pediatric orthotics services.",
      imgSrc: ServicesImg6,
    },
    {
      id: 7,
      name: "Spinal Orthotics",
      description:
        "P&O International is the leading provider of spinal orthotics services. Its services are directed toward tailored solutions for a range of spinal conditions, including scoliosis, kyphosis, spinal injuries, degenerative disc disease, and post-surgical recovery. P&O International approaches orthotics through the comprehensive assessment of the patient's condition, medical history, and lifestyle followed by custom design and fabrication of orthoses using advanced technology.Proper fitting and adjustments are critical for the success of orthotic devices. Training and adaptation assistance P&O International offers to patients allows them to use their orthotic devices effectively and integrate them into their everyday life. Regular follow-up care ensures the orthosis is updated to meet patient needs.The advanced technology in designing and manufacturing spinal orthotics is provided by P&O International. The company includes horacolumbosacral orthoses, or TLSOs, cervical braces for neck stabilization, lumbar supports for pain relief in the lower back, and custom braces for pediatric and adult scoliosis management.P&O International's Spinal Orthotics Services offer the client numerous benefits, including knowledge and expertise in the field, innovative solutions to offer customers, patient-centric care, and comprehensive support, thereby bringing in better mobility and health to a healthier spine and a better quality of life through an appointment.",
      imgSrc: ServicesImg7,
    },
    {
      id: 8,
      name: "Upper Extremity Orthotics",
      description:
        "P&O International is the one of the pioneers in upper-limb orthotic solutions that support mobility and functioning for those persons who suffer due to injury or chronic or birth defects involving injuries to the arm, wrist, hand, or shoulders. They would provide services where they would offer some support, improve strength, and regain independence through their treatment or therapy.P&O International offers comprehensive solutions for upper extremity support, including post-injury rehabilitation, neurological conditions, chronic pain and arthritis, congenital differences, and workplace and sports injuries. They provide customized care at every step, including a comprehensive analysis, tailor-made and manufactured orthotics, precision fitting and adjustment, training and rehabilitation support, and continuous care and maintenance.P&O International uses the latest technology in the design and production of upper limb orthotics, including wrist and hand orthoses, elbow supports, shoulder braces, and functional splints. The benefits of upper limb orthotics include increased strength and stability, increased motion, reduced pain, promotion of healing, improved performance in daily or specialized activities, and a return to normal and independent life.P&O International is known for its expertise, experience, and innovative solutions. Their staff consists of highly trained professionals with expertise in upper limb orthotics, ensuring personalized attention and comprehensive support from consultation to follow-up care. Contact P&O International today to schedule a consultation and take the first step towards improved mobility and independence.",
      imgSrc: ServicesImg8,
    },
    {
      id: 9,
      name: "Hand Orthotics",
      description:
        "P&O International is the best company in customizing hand orthotics for any person who may be suffering from injury, chronic, or congenital problems. Its extensive solutions can assist individuals to recover their lost freedom of mobility while relieving pain, allowing individuals to execute routine tasks confidently. P&O International has deployed Hi-Tech Prosthetics, Osseo integrated technology, and intelligent artificial limbs/sensor prosthetic robotic hands to obtain solutions of several conditions such as post-injury rehabilitation, arthritis and joint pain, neurological disorders, carpal tunnel syndrome, and congenital conditions.The hand orthotics process of P&O International involves a comprehensive evaluation, custom design and fabrication, careful fitting and modification, training and adaptation to use, and ongoing care and maintenance. They use the latest technology, such as 3D scanning for precise measurements and advanced materials for increased durability, to provide high-quality hand orthotics.Hand orthotics are beneficial to clients in relieving pain and stress on joints, improving dexterity and range of motion, assisting with recovery, and preventing additional injury. They ensure good performance of daily activities while boosting confidence and independence. P&O International continues to innovate while offering comprehensive support for its clients. Contact P&O International today to book a consultation and start on your way to greater hand mobility, independence, and a new life.",
      imgSrc: ServicesImg9,
    },
  ];

  return (
    <div>
      <Nav />
      <section className="services">
        <h1 className="services__title">Our Services</h1>
        <p className="services__description">
          P&O International is the name associated and trusted for providing the
          best artificial services in India for those who have lost a limb. Our
          upper limb prosthetics work toward restoring function and mobility,
          and the masters of bespoke design provide custom upper limb prosthetic
          sockets that cater to maximum comfort and stability. We also
          specialize in high-tech, customized lower-limb prosthetic technology
          designed for better mobility and independence. Our leading-edge
          artificial limb products range from very realistic prosthetic hands.
          We have all solutions individually suited to meet our clients'
          specific needs. <br />
          Being one of the first companies in the field of artificial limb
          prosthesis, we are proud of providing innovative and personalized care
          to transform lives. Reputed for offering some of the best artificial
          services in India, our solutions combine advanced technology with
          expert craftsmanship to empower people to regain their freedom and
          confidence.
        </p>
        <div className="services__content">
          {services.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__card-image">
                <a href="/photos">
                  <img src={service.imgSrc} alt={service.name} className="services__card-img" />
                </a>
              </div>
              <div className="services__card-description">
                <h3 className="services__card-description-title">{service.name}</h3>
                <p className="services__card-description-text">{service.description}</p>
                <button className="services__card-description-btn" onClick={handleModal}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="army__modalWrap">
            <Form isFieldVisible={false} isIconVisible={true} setShowModal={setShowModal} />
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Services;
