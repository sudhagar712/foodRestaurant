import React from 'react'
import {LIST, PROMO} from "../constants/index"

import PromoCard from './PromoCard'

const Promo = () => {
  return (
    <section id='promo' className='bg-secondary-light dark:bg-secondary-dark py-9'>
      
      <div className='m-5 md:m-10'>
        <h1 className='font-Geist font-bold mb-8 tracking-wider text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark'>{LIST.list1}</h1>
        {/* promocard */}
        <div className='flex flex-col justify-center gap-5 md:flex lg:grid lg:grid-cols-3'>
            {PROMO.map((props, index)=> (
                <div key={index}>
                    <PromoCard props={props}/>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Promo
