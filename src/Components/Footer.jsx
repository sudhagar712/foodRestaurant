import { CopyrightIcon, FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className="p-9 md:p-11 dark:text-secondaryText-dark">
      <div className="flex flex-col space-y-5 items-center ">
        <ul className='flex justify-center items-center space-x-3 cursor-pointer '>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YoutubeIcon />
          </li>
          <li>
            <GithubIcon />
          </li>
        </ul>
        <p className='font-Geist flex items-center font-medium text-sm  gap-2'>
            <CopyrightIcon/> All rights reserved {new Date().getFullYear()} - Sudhagar_Msr
        </p>
      </div>
    
    </section>
  );
}

export default Footer
