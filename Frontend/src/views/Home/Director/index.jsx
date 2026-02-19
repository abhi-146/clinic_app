import React from "react";
import "../../../styles/Home/Director/index.scss";
import DirectorPhoto from "../../../assets/Home/Director/about.jpg";


const Director = () => {

    // Automatic slide change every 2 seconds
    return (
        <section className="director">
            <h2 className="director__heading">Message of Director</h2>
            <div className="director__details">
                <img
                    src={DirectorPhoto}
                    alt='Director'
                    className="director__image"
                />
                <div className="director__message-wrap">
                    <h2 className="director__message-wrap-title">
                        Message from Director
                    </h2>
                    <p className="director__message-wrap-desc">As the director of this organization, I want to take a moment to personally connect with you and share our vision, values, and commitment to transforming lives through innovative prosthetic and orthotic solutions. At our Organization, we understand that losing a limb or experiencing mobility challenges can be a life-altering event. It affects not just physical abilities but also emotional well-being and quality of life. Our mission is to ensure that each individual we serve has access to the highest quality prosthetic and orthotic devices tailored to their unique needs. We strive to empower our clients to regain independence, confidence, and an active lifestyle. Our journey began with a simple but profound belief: that everyone deserves the chance to move freely and live fully. Over the years, we have dedicated ourselves to advancing the field of prosthetics and orthotics. This commitment is reflected in our state-of-the-art technology, our skilled team of practitioners, and our holistic approach to care. Today our advanced prosthetic solutions have helped talented athletes overcome limitations and reach the pinnacle of success, winning gold medals at the Para Olympics. We celebrate their determination and achievements.... <a href="/director">see all</a></p>
                    
                    <p className="director__message-wrap-sign">Dr. Neeraj Saxena Director</p>
                </div>
            </div>

        </section>
    );
};

export default Director;
