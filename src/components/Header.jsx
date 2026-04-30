import React from 'react'
import imgHero from '/images/Hero.jpg'
import Hero from './Hero'

function Header() {
  return (
    <div className={` h-screen w-full md:mt-96 lg:pt-0 pt-60 bg-center object-fill 
        bg-gray-100 
        md:mb-0
        md:bg-[url('/images/Hero.jpg')]
        md:bg-cover md:bg-no-repeat`}>
        <Hero/>

    </div>
  )
}

export default Header
{/**
  style={{backgroundImage:`url(${imgHero})`, backgroundRepeat:`no-repeat`, backgroundSize:'cover'}} 
  className={`h-screen  pt-96 w-full    object-fill bg-center `}
 */}