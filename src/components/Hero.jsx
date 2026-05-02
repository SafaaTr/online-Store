import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {

    const contentHero={
        title:"FIND CLOTHES THAT MATCHES YOUR STYLE",
        paragraph:"Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
        textButton:"Shop Now",
        statistice:[
            {
                title:"200+",
                paragraph:"International Brands"

            },
            {
                title:"2000+",
                paragraph:"High-Quality Products"

            },
            {
                title:"30,000+",
                paragraph:"Happy Customers"

            }



        ]


    }
  
  return (
    <div className='pt-30 md:pt-100 lg:ml-70 px-20'>
        <h1 className='text-3xl md:text-6xl  lg:font-bold mt-20 md:mt-0 md:my-20 font-semibold lg:pr-700'>{contentHero.title}</h1>
        <p className='text-[#00000099] text-[16px] lg:pr-680 z-30 my-15  md:my-32'>{contentHero.paragraph}</p>
        <button className='w-190 h-50 md:my-0 my-10 bg-black text-white text-center rounded-3xl cursor-pointer transition-all duration-300  hover:-translate-y-3 hover:shadow-2xl'>
            <Link to="/shop">{contentHero.textButton}</Link>
        </button>
        <div className='md:flex flex-wrap gap-10 justify-between items-center lg:mr-700 pt-40'>
            {
                contentHero.statistice.map((item, index)=>(
                    <div key={index} className='md:my-0 my-16'>
                        <h2 className='font-semibold text-2xl md:text-3xl md:my-0 my-4'>{item.title}</h2>
                        <p className='text-[#00000099] text-[12px] mt-5'>{item.paragraph}</p>
                    </div>
                )) 
            }
            
        </div>

    </div>
  )
}

export default Hero