import React from 'react'

const ReviewCard = ({dish}) => {
  return (
    <section className="flex rounded-xl bg-bgTried-light dark:bg-black overflow-hidden  cursor-pointer shadow-2xl dark:shadow-xl dark:shadow-bgPrimary-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap lg:gap-3 ">
        <div className="flex flex-col ml-4 my-2 justify-center  flex-wrap lg:gap-3">
          <blockquote>
            <span className="font-medium font-Nunito text-primaryText-light  dark:text-bgSecondary-light text-sm">
              " {dish.description} "
            </span>
          </blockquote>
          <div className="flex items-center divide-x-2 divide-gray-500 dark:text-white">
            <cite className="font-Bebas pe-2 font-medium text-gray-500 dark:text-white">
              {dish.name}
            </cite>
            <cite className="font-Bebas pe-2 font-medium text-gray-500 dark:text-white">
              {dish.title}
            </cite>
          </div>
        </div>
        <div className='w-full'>
          <img src={dish.image} alt={dish.title} className='w-full' />
        </div>
      </div>
    </section>
  );
}

export default ReviewCard
