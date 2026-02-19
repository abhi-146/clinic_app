import React, { useState } from "react";
import "../../styles/Photos/index.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Photo1 from '../../assets/Photos/Prosthesis for Lower Limb/photo-1.jpg'
import Photo2 from '../../assets/Photos/Prosthesis for Lower Limb/photo-2.jpg'
import Photo3 from '../../assets/Photos/Prosthesis for Lower Limb/photo-3.jpg'
import Photo4 from '../../assets/Photos/Prosthesis for Lower Limb/photo-4.jpg'
import Photo5 from '../../assets/Photos/Prosthesis for Lower Limb/photo-5.jpg'
import Photo6 from '../../assets/Photos/Prosthesis for Lower Limb/photo-6.jpg'
import Photo7 from '../../assets/Photos/Prosthesis for Lower Limb/photo-7.jpg'
import Photo8 from '../../assets/Photos/Prosthesis for Upper Limb/photo-1.jpg'
import Photo9 from '../../assets/Photos/Prosthesis for Upper Limb/photo-2.jpg'
import Photo10 from '../../assets/Photos/Prosthesis for Upper Limb/photo-3.jpg'
import Photo11 from '../../assets/Photos/Prosthesis for Upper Limb/photo-4.jpg'
import Photo12 from '../../assets/Photos/Prosthesis for Upper Limb/photo-5.jpg'
import Photo13 from '../../assets/Photos/Prosthesis for Upper Limb/photo-6.jpg'
import Photo14 from '../../assets/Photos/Cosmetic Restoration/photo-1.jpg'
import Photo15 from '../../assets/Photos/Cosmetic Restoration/photo-2.jpg'
import Photo16 from '../../assets/Photos/Cosmetic Restoration/photo-3.jpg'
import Photo17 from '../../assets/Photos/Cosmetic Restoration/photo-4.jpg'
import Photo18 from '../../assets/Photos/Cosmetic Restoration/photo-5.jpg'
import Photo19 from '../../assets/Photos/Cosmetic Restoration/photo-6.jpg'
import Photo20 from '../../assets/Photos/Cosmetic Restoration/photo-7.jpg'
import Photo21 from '../../assets/Photos/Orthotic Product/photo-1.jpg'
import Photo22 from '../../assets/Photos/Orthotic Product/photo-2.jpg'
import Photo23 from '../../assets/Photos/Orthotic Product/photo-3.jpg'
import Photo24 from '../../assets/Photos/Orthotic Product/photo-4.jpg'
import Photo25 from '../../assets/Photos/Orthotic Product/photo-5.jpg'
import Photo26 from '../../assets/Photos/Orthotic Product/photo-6.jpg'


// Importing all photos dynamically


const videoData = [
  { id: "clLtCgWWT6A", title: "Video 1" },
  { id: "s_cJ2pWxGPo", title: "Video 2" },
  { id: "8DKoQ_8nZyA", title: "Video 3" },
];

const Photos = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <Nav />

      {/* Photo Grid Section */}

      {/* YouTube Video Section */}
      <section className="video-section">
        <h2 className="video-section__title">Watch Our Videos</h2>
        <div className="video-grid">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="video-container"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.id}`,
                  "_blank"
                )
              }
            >
              <iframe
                src={
                  hovered === index
                    ? `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`
                    : `https://www.youtube.com/embed/${video.id}`
                }
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <section className="photos">
        <h2 className="photos__title">Prosthesis for Lower Limb</h2>

        <div className="photos__grid">
          <img src={Photo1} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo2} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo3} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo4} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo5} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo6} className="photos__img" alt="Prosthesis for Lower Limb" />
          <img src={Photo7} className="photos__img" alt="Prosthesis for Lower Limb" />
        </div>
      </section>

      <section className="photos">
        <h2 className="photos__title">Prosthesis for Upper Limb</h2>

        <div className="photos__grid">
          <img src={Photo8} className="photos__img" alt="Prosthesis for Upper Limb" />
          <img src={Photo9} className="photos__img" alt="Prosthesis for Upper Limb" />
          <img src={Photo10} className="photos__img" alt="Prosthesis for Upper Limb" />
          <img src={Photo11} className="photos__img" alt="Prosthesis for Upper Limb" />
          <img src={Photo12} className="photos__img" alt="Prosthesis for Upper Limb" />
          <img src={Photo13} className="photos__img" alt="Prosthesis for Upper Limb" />
        </div>
      </section>

      <section className="photos">
        <h2 className="photos__title">Cosmetic Restoration</h2>

        <div className="photos__grid">
          <img src={Photo14} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo15} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo16} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo17} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo18} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo19} className="photos__img" alt="Cosmetic Restoration" />
          <img src={Photo20} className="photos__img" alt="Cosmetic Restoration" />
        </div>
      </section>

      <section className="photos">
        <h2 className="photos__title">Orthotic Product</h2>

        <div className="photos__grid">
          <img src={Photo21} className="photos__img" alt="Orthotic Product" />
          <img src={Photo22} className="photos__img" alt="Orthotic Product" />
          <img src={Photo23} className="photos__img" alt="Orthotic Product" />
          <img src={Photo24} className="photos__img" alt="Orthotic Product" />
          <img src={Photo25} className="photos__img" alt="Orthotic Product" />
          <img src={Photo26} className="photos__img" alt="Orthotic Product" />
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Photos;
