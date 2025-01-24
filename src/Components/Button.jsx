import React from 'react'

const Button = ({text, icon}) => {
  return (
    <div>
        <div className='space-x-4 font-Geist flex items-center '>
            <button className='bg-navBg-light dark:bg-navBg-dark text-black dark:text-white text-base rounded-md p-2 font-semibold hover:*:text-green-800 shadow-lg'>
                <a href="" className='flex justify-center items-center gap-3'>{text}{icon}</a>
            </button>
        </div>
      
    </div>
  )
}

export default Button
