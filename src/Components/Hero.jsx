import React from "react";
import HeroCard from "./HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { BENEF, HERO, HEROTEXTE } from "../constants/index";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BikeIcon, HeartPulse, ShoppingBag, SoupIcon } from "lucide-react";
import Button from "./Button";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      <div className="grid min-h-[135vh] md:min-h-[100vh] items-center justify-center">
        <div className="mt-20  h-full w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 p-5">
          <div className="flex items-center">
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
              className="w-full md:w-[25rem] flex flex-col justify-center items-center"
            >
              {HERO.map((hero, index) => (
                <SwiperSlide key={index}>
                  <HeroCard hero={hero} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* text */}
          <div className="text-center md:text-start md:items-start  lg:basis-2/5 ">
            <h1 className="font-Geist md:mt-[130px] uppercase text-3xl font-extrabold md:pr-10 lg:text-6xl text-primaryText-light dark:text-primaryText-dark mb-4">
              {HEROTEXTE.header}
            </h1>
            <p className="tracking-wide text-secondaryText-light dark:text-secondaryText-dark text-base mb-6 font-Geist">
              {HEROTEXTE.description}
            </p>
            {/* feature  */}
            <div className="flex font-Bebas text-base flex-wrap justify-center lg:justify-start gap-3 md:gap-10 text-primaryText-light dark:text-primaryText-dark mb-6">
              <div className="text-center flex items-center justify-center gap-2 ">
                <HeartPulse className="text-red-500" />
                {BENEF.benef1}
              </div>
              <div className="text-center flex items-center justify-center gap-2 ">
                <SoupIcon className="text-green-600" />
                {BENEF.benef2}
              </div>
              <div className="text-center flex items-center justify-center gap-2 ">
                <BikeIcon className="text-yellow-600" />
                {BENEF.benef3}
              </div>
            </div>
            <div className="font-Geist flex gap-5 justify-center md:justify-center lg:justify-start mb-6">
              <Button
                text="Explore Menu"
                href="#menu"
                icon={<IoIosArrowDroprightCircle />}
              />
              <Button text="Order Now" href="#contact" icon={<ShoppingBag />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
