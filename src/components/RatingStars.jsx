import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";


function RatingStars({rate=0}) {
    const fullStars =Math.floor(rate) //عدد النجوم الكاملة
    const hasHalfStar=rate %1 >= 0.5 // هل يوجد نص نحجمة 
    const emptyStars= 5-fullStars -(hasHalfStar ? 1 :0 ) //بتقي النجوم فاضية 
  return (
    <div className='flex items-center gap-1 '>
       
      {[...Array(fullStars)].map((_ ,i)=>( //_ → يعني "العنصر نفسه" (ما منحتاج قيمته) //i → هو الـ index (0, 1, 2)
            <span key={`full-${i}`}>
                <FaStar  size={20 } className='text-yellow-300'/>
            </span>
      ))}
      {/* نص نجمة */}
      {hasHalfStar &&  <span><TiStarHalfOutline size={20}  className='text-yellow-300'/></span> }
      {/* نجوم فاضية  */}

       {[...Array(emptyStars)].map((_,i)=>(
            <span key={`full-${i}`}>
                <CiStar size={20} className='text-yellow-300'/>
            </span>
        ))}
      

    </div>
  )
}

export default RatingStars