import { ShoppingBag } from 'lucide-react'
import React from 'react'

const DishCard = ({project}) => {
  return (
    <div className='flex flex-col justify-center items-center p-3 rounded-xl bg-secondary-light dark:bg-secondary-dark hover:scale-110 hover:border-[1px] cursor-pointer shadow-xl dark:shadow-bgPrimary-dark'>
     <img src={project.image} alt={project.title} className='flex flex-1 w-full md:w-40 p-3 hover:scale-110 hover:duration-500' />
     <div className='p-1 w-full '>
        <h3 className='text-lg font-Nunito font-semibold  text-primaryText-light dark:text-primaryText-dark uppercase w-full mb-2'>{project.title}</h3>
        <p className='text-base font-Nunito   font-normal text-secondaryText-light dark:text-secondaryText-dark'>{project.description}</p>
        <p className='flex justify-between font-bebas text-yellow-500 mt-1 font-bold'>{project.price} <ShoppingBag /></p>
     </div>
    </div>
  )
}

export default DishCard
