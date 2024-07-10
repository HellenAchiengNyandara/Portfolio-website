"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (

    <section className="lg:py-16 flex flex-auto">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-7 text-center sm:text-left'>
          <h1 className='text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font'>
            Hello, I'm <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hellen',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
        'Tech Enthusiast',
        1000,
        'Technical Writer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />

          </h1>
          <p className='text-white text-base sm:text-lg mb-6 lg:text-xl content-flex text-left'>
           A Skilled Software Engineer and Tech Enthusiast, driven by a passion for creating elegant, robust, and scalable software solutions.

With a deep love for innovation and excellence, I aim to develop applications that make a meaningful impact.
          </p>
          <button className="bg-green-400 text-black py-2 px-4 rounded hover:bg-green-500 transition duration-300">See My Projects</button>
        </div>
        <div className='col-span-1 lg:col-span-5 place-self-center mt-4 lg:mt-0 '>
        <div className='rounded-full w-[250px] h-[250px] overflow-hidden flex justify-center '>
            <Image
              src='/images/hero-image.png'
              alt='Hero image'
              className='object-cover'
              width={300}
              height={300}
            />
          </div>
          </div>
        </div>
      
    </section>
  )
}

export default HeroSection
