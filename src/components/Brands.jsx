import React from 'react'
import brands1 from '/images/zara-logo.png'
import brands2 from '/images/Vector.png'
import brands3 from '/images/prada-logo.png'
import brands4 from '/images/gucci-logo.png'
import brands5 from '/images/Group.png'
function Brands() {
   const imgbrands=[
    { img:brands1 },{ img:brands2}, { img:brands3},  {img:brands4}, {img:brands5}
   ]
  return (
    <div className='px-20 md:px-70 w-full h-70 md:h-100 bg-black flex gap-10 sm:justify-between items-center'>
       
        {
          imgbrands.map((item, index) => (
          <img 
            key={index}
            src={item.img} 
            alt="brand" 
            className="w-50 h-18 sm:w-110 sm:h-40" 
          />
        ))
        }

    </div>
  )
}

export default Brands