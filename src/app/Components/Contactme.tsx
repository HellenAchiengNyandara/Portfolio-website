"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div id='contact' className='text-white'>
      <h1 className='font-bold text-3xl sm:text-center pt-20 mb-8 sm:mb-12'>Contact Me</h1>
      <div className='flex flex-col sm:flex-row justify-between gap-8'>
        <div>
          <h1 className='font-bold text-2xl text-white'>Get in Touch Today!</h1>
          <p className='my-4 mb-1 p-2 text-white'>
            Have a question, project idea, or just want to say hello? Feel free to reach out. I typically respond within 2 hours.
          </p>
          <div className='socials flex flex-col gap-2 w-fit text-white'>
            <a href="tel:+254742971932"> +254742084496</a>
            <Link href="https://www.github.com/HellenAchiengNyandara" target='_blank'>
              <span><FaGithub /></span> Github
            </Link>
            <Link href="https://www.linkedin.com/in/hellen-achieng-3a2b38229" target='_blank'>
              <span><FaLinkedinIn /></span> LinkedIn
            </Link>
            <Link href="https://wa.me/+254742084496" target='_blank'>
              <span><FaWhatsapp /></span> Whatsapp
            </Link>
          </div>
        </div>
        <div className='sm:w-1/2'>
          <form className="w-full" action="https://formsubmit.co/amosmwongelah@gmail.com" method="post">
            <div>
              <input className='w-full rounded-lg p-4 bg-transparent border' type="email" placeholder='youremail@email.com' name="email" />
            </div>
            <div className='my-4'>
              <textarea className='w-full rounded-lg p-4 bg-transparent border' name="message" cols={30} rows={5} placeholder='Message Here'></textarea>
            </div>
            <button type="submit" className='send-btn py-2 px-4 rounded-[5px] w-1/4'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
