import React, { useState } from 'react';
import '../../../styles/_main.scss';
import '../../../styles/Home/Hero/index.scss';
import RightArrow from '../../../assets/icon_rightArrow.svg';
import Form from '../../../components/Form';
import '../../../styles/_main.scss'


const Hero = () => {

  const [showModal, setShowModal] = useState(false)


  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const handleModal = () => {
    setShowModal(true)



  }

  return (
    <div className='navbar-hero'>
      {/* Navbar */}
      <span className='black-layer'></span>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero__desc'>
          <h1 className='hero__desc-heading'>
            Providing an Exceptional Patient Experience
          </h1>
          <p className='hero__desc-subheading'>
            Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a
            patient-centered approach, we're dedicated to your well-being. Trust
            us with your health and experience the difference.
          </p>
          <a href='/services' className='c-btn hero__desc-btn arrow-anim animHover isAbove1024'>
            <span className='c-btn_text'>Services</span>
            <img
              className='c-btn_icon'
              width={18}
              height={18}
              src={RightArrow}
              alt='right-arrow'
            />
          </a>

          <button className='army__btn c-btn arrow-anim animHover isBelow1024' onClick={handleModal}>
            <span className='c-btn_text'>Book now</span>
            <img
              className='c-btn_icon'
              width={18}
              height={18}
              src={RightArrow}
              alt='right-arrow'
            />
          </button>
        </div>

        {showModal && (<div className="army__modalWrap">
          <Form isFieldvisible={false} isIconVisible = {true} showModal={showModal} setShowModal={setShowModal} />
        </div>)}

        <Form visible={false} />
      </section>
    </div>
  );
};

export default Hero;
