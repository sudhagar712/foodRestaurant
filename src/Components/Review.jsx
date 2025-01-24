import React from 'react'
import { LIST, REVIEW1, REVIEW2 } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ReviewCard from './ReviewCard';


const Review = () => {
  return (
    <section
      id="review"
      className=" py-9 md:p-10 bg-secondary-light dark:bg-secondary-dark "
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-Geist font-bold mb-8 tracking-wider text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark">
          {LIST.list4}
        </h1>
        {/* Review card */}
        <div className="flex flex-col justify-center m-5 dark:text-primaryText-dark">
          <h3 className="font-Nunito mb-5 flex flex-col items-center text-center">
            {REVIEW1.header}
          </h3>
          <p className="text-center font-Nunito">{REVIEW1.description}</p>
        </div>
      </div>
      {/* swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakPoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full md:w-[25rem] flex flex-col justify-center items-center"
      >
        {REVIEW2.map((dish, index) => (
          <SwiperSlide key={index}>
            <ReviewCard dish={dish} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Review
