import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/Home/Reviews/index.scss";
import Review1 from "../../../assets/Home/Reviews/review1.jpg";
import Review2 from "../../../assets/Home/Reviews/review2.jpg";
import Review3 from "../../../assets/Home/Reviews/review3.jpg";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Michale",
      review:
        "I recently received my upper limb prosthesis from P&O International, and I couldn’t be happier with the experience! From the initial consultation to the final fitting, their team was incredibly professional, knowledgeable, and supportive.",
      image: Review1,
    },
    {
      id: 2,
      name: "Rohan",
      review:
        "I highly recommend P&O International to anyone in need of a high-quality upper limb prosthesis. Their expertise and commitment to improving mobility and independence are unmatched!",
      image: Review2,
    },
    {
      id: 3,
      name: "Dinesh",
      review:
        "I recently got a cosmetic prosthesis from P&O International, and I am beyond impressed with the quality and service! From the very first consultation, their team made me feel comfortable and confident about the entire process.",
      image: Review3,
    },

  ];

  return (
    <section className="reviews">
      <h2 className="reviews__heading">Our Happy Clients</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="reviews__card">
              <img
                src={review.image}
                className="reviews__card-img"
                alt={review.name}
              />
              <h3 className="reviews__card-name">{review.name}</h3>
              <p className="reviews__card-review">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
