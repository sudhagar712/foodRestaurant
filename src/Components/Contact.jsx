import React from 'react'
import { CONTACT, LIST } from "../constants/index";
import { Locate, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-secondary-light dark:bg-secondary-dark py-9"
    >
      <div className="m-5 md:m-10">
        <h1 className="font-Geist font-bold mb-8 tracking-wider text-center text-3xl lg:text-4xl text-primaryText-light dark:text-primaryText-dark">
          {LIST.list5}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 text-center justify-center items-center ">
          <div className="font-Geist flex flex-col justify-center items-center space-y-5 dark:text-primaryText-dark">
            <p>{CONTACT.header}</p>
            <div className="flex flex-col gap-4">
              <h2 className="flex gap-2"><Locate/>{CONTACT.address}</h2>
              <h2 className="flex gap-2"><Phone/>{CONTACT.phone}</h2>
              <h2 className="flex gap-2"><Mail/>{CONTACT.email}</h2>
            </div>
          </div>
          {/* contact form */}
          <div className='font-Geist mt-8 md:mt-0 dark:text-secondaryText-dark'>
            <p className='mb-5'>{CONTACT.description}</p>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
