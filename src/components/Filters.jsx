
import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";


function Filters({price,setPrice,rating,setRating,selectedCategories,setSelectedCategories ,closeMobileFilter}) {

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleCategory =(cat)=>{
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c=>c!==cat))
    } else {
      setSelectedCategories([...selectedCategories ,cat])
    }
   
  }

  return (
    <div className='w-290 md:bg-white rounded-2xl  md:shadow-2xl md:p-30'>
      <div className='border-b border-[#000009] flex justify-between  py-15 '>
        <h1 className='  text-3xl font-semibold'>Filters</h1>
       
      </div>
          {/*Range-price */}
      <div className='pt-10'>
        <h2 className='my-10 font-semibold'>Price Range</h2>
        <p className='text-[#00000099] '>$0-${price===260 ? "Infinity" :`${price}`}</p>
    
        <input type="range" max={500} min={0} value={price} onChange={(e)=>{setPrice(e.target.value)
           }} className='w-full text-black my-10 custom-range '/>
      </div>
              {/*rating */}
      <div className='pt-10'>
        <h2 className='font-semibold'>Rating</h2>
        <div className='flex my-10  gap-10'>
        {
          [1,2,3,4,5].map(star=>(
            <span
              key={star}
              onClick={()=>{setRating(star)
                }
              }
              className='text-lg cursor-pointer '
            >
              {
                star <=rating ? (
                  <FaStar size={25} className="text-yellow-400" />
                ):(
                  <CiStar size={25} className="text-gray-400" />
                )
              }
            </span>
          ))
        }
        </div>
        {
          rating >0 &&(
            <button onClick={()=>setRating(0)} className='u underline text-[#00000099] text-[12px] my-6'>Clear rating filter </button>
          )
        }
        
       
      </div>
               {/* Category*/}
      <div className='pt-10'>
        <h2 className='my-6 font-semibold'>Category</h2>
        {categories.map((cat,i)=>(
        <div key={i} className=' flex gap-10 my-10 '>
          <input type="checkbox" 
          checked={selectedCategories.includes(cat)}
          onChange={()=>toggleCategory(cat)}
          className='w-20 h-20 custom-checkbox 
       
           '
         />
         <label htmlFor="" className='text-[#00000099] '>{cat}</label>
         </div>
        ))
        }
      </div>
      

    </div>
  )
}

export default Filters