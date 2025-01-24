import React from 'react'

const HeroCard = ({hero}) => {
  return (
    <div className='flex justify-center items-center w-full overflow-hidden'>
        <div className='flex justify-center items-center'>
            <div className='w-full' >
                <img src={hero.image} alt={hero.title}  className='w-full h-full'/>
            </div>
        </div>
      
    </div>
  )
}

export default HeroCard
