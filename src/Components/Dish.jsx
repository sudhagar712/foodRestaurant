import React, { useState } from "react";
import {
  DISHESTEXT,
  LINK,
  LIST,
  FOOD,
  SNACK,
  BURGER,
  JUICE,
  PIZZA,
  SALAD,
  SMOOTHIE,
} from "../constants/index";
import DishCard from "./DishCard";

const Dish = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Corrected preventDefault()
    setSelectedCategory(targetId);
    // Smooth scroll to section (optional)
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const allItems = [
    ...FOOD.map((item) => ({ ...item, category: "Food" })),
    ...SNACK.map((item) => ({ ...item, category: "Snack" })),
    ...BURGER.map((item) => ({ ...item, category: "Burger" })),
    ...JUICE.map((item) => ({ ...item, category: "Juice" })),
    ...PIZZA.map((item) => ({ ...item, category: "Pizza" })),
    ...SALAD.map((item) => ({ ...item, category: "Salad" })),
    ...SMOOTHIE.map((item) => ({ ...item, category: "Smoothie" })),
  ];

  const filterItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="menu"
      className="container flex flex-col items-center mx-auto py-16 bg-secondary-light dark:bg-secondary-dark py-9"
    >
      <div className="m-5 md:m-10">
        <h1 className="font-Geist font-bold mb-8 tracking-wider text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark">
          {LIST.list2}
        </h1>
        {/* Description */}
        <div>
          <p className="font-Geist tracking-wider text-center dark:text-secondary-dark">
            {DISHESTEXT.description}
          </p>
        </div>
        {/* Category Links */}
        <div className="w-full flex justify-center items-center my-10">
          <div className="font-Geist mt-7 grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-flow-col md:justify-center md:space-x-3">
            {LINK.map((link, index) => (
              <button
                key={index}
                onClick={(e) => handleScroll(e, link.targetId)}
                className={`bg-bg-secondary-light dark:bg-bg-secondary-dark text-sm font-semibold rounded-full flex justify-center items-center w-20 p-1 shadow-lg dark:text-bgPrimary-light ${
                  selectedCategory === link.targetId
                    ? "bg-yellow-400 dark:bg-yellow-400 text-black dark:text-white font-bold tracking-wide shadow-xl"
                    : ""
                } hover:bg-yellow-500 hover:text-black`}
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
        {/* dishcard */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 my-8 p-5">
            {filterItems.map((project, index) => (
                <DishCard key={index} project={project}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Dish;
