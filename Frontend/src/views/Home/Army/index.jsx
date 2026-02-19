import React, { useState } from 'react'
import '../../../styles/Home/Army/index.scss';
import '../../../styles/_main.scss'
import RightArrow from '../../../assets/icon_rightArrow.svg';
import Form from '../../../components/Form';
import CGHS from '../../../assets/Home/Nav/CGHS.jpeg'
import ECHS from '../../../assets/Home/Nav/ECHS.jpeg'

const Army = () => {

    const [showModal, setShowModal] = useState(false)

    showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    const handleModal = () => {
        setShowModal(true)
    }

    return (
      <section className="army">
        <div className="army__headingWrap">
          <p className="army__headingWrap-subheading">
            Prosthesis Services for ECHS and CGHS Servants :{" "}
            <br className="isBelow768" />
            Restoring Mobility and Independence with P&O International{" "}
          </p>
        </div>

        <ul className="army__descWrap">
          <li className="army__descWrap-list">
            <img
              className="army__descWrap-list-img"
              src={ECHS}
              alt="expertise"
            />
            <h2 className="army__descWrap-list-heading">
              Specialized Prosthesis Services for ECHS Servants
            </h2>
            <p className="army__descWrap-list-desc">
              P&O International provides specialized prosthesis services to ECHS
              servants for better mobility and functionality. With personalized
              care and the latest technology, we enable people to walk again and
              live life with greater independence and quality.
            </p>
          </li>
          <li className="army__descWrap-list">
            <img
              className="army__descWrap-list-img"
              src={CGHS}
              alt="expertise"
            />
            <h2 className="army__descWrap-list-heading">
              Sophisticated Prosthesis Services for CGHS Servants
            </h2>
            <p className="army__descWrap-list-desc">
              P&O International offers sophisticated prosthesis services to the
              servants of CGHS, thereby providing personalized solutions and
              state-of-the-art technology. We have a commitment to returning
              mobility, independence, and better quality of life for all.
            </p>
          </li>
        </ul>

        <button
          className="army__btn c-btn arrow-anim animHover"
          onClick={handleModal}
        >
          <span className="c-btn_text">Book now</span>
          <img
            className="c-btn_icon"
            width={18}
            height={18}
            src={RightArrow}
            alt="right-arrow"
          />
        </button>

            {showModal && (<div className="army__modalWrap">
                <Form isFieldvisible={true} isIconVisible = {true}  setShowModal={setShowModal} />
            </div>)}
        </section>
    )
}

export default Army
