import { ShoppingBag } from 'lucide-react'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PromoCard = ({props}) => {



   useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 100,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh(); // Refresh AOS animations
    }, []);



  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="flex flex-col p-5 m-5 rounded-xl bg-bgTried-light dark:bg-black  shadow-2xl"
    >
      <img src={props.image} alt={props.title} className="w-40 mx-auto " />
      <h3 className="bg-red-600 font-Bebas text-white font-extrabold p-1 uppercase flex w-fit shadow-xl">
        {props.label}
      </h3>
      <h1 className="font-Geist tracking-wide my-4 text-primaryText-light dark:text-primaryText-dark ">
        {props.description}
      </h1>
      <span>
        <a
          href=""
          className="flex items-center gap-3 text-base cursor-pointer font-bold text-red-600 font-Geist"
        >
          {props.action} <ShoppingBag className="w-5 shadow-2xl" />
        </a>
      </span>
    </div>
  );
}

export default PromoCard
