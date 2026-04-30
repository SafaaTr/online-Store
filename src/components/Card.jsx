import React from 'react'
import RatingStars from './RatingStars'
import { Link } from "react-router-dom";


function Card({item}) {

  return (
    <div className=''>
      <Link to={`/Product/${item.id}`} >
        <div className=' border border-gray-100 w-full md:w-290 lg:w-310 rounded-2xl h-420  relative transition-all duration-300  hover:-translate-y-3 hover:shadow-2xl '>
              <div className='bg-gray-100 w-full h-250 rounded-2xl flex items-center justify-center mb-10  '>
              <img src={item.image} alt={item.title} className='w-200 h-200 p-16' />
              </div>
            <div className='pl-10'>
            <h3 className='text-[14px] font-medium my-10'>{item.title}</h3>
              <div className='flex justify-between items-center my-10'>
              <RatingStars rate={item.rating.rate} />
              <p className='text-[14px] text-[#00000099] '>{item.rating.rate}/5</p>
              <p className='text-[12px] text-[#00000099] mr-10'>{item.rating.count} reviews</p>
              </div>
              <p className='text-[#00000099] text-[14px] font-sans'>{item.category}</p>
              <div className=' absolute bottom-10'>
                  <div className='flex justify-between items-center gap-120'>
                      <p className='text-[14px] font-semibold'>${item.price}</p>
                      {
                          item.price <=50 ?   <button className='text-[12px] w-60 h-30 bg-[#fab9b9] text-red-500 rounded-2xl'>On sale</button> :""
                      }
                    
                  </div>
                
              </div>
            </div>
            
        </div>
      </Link>
       
  
    </div>
     
  )
}

export default Card