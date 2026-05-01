import React, { useEffect, useState } from 'react'
import TitleSection from './TitleSection'
import axios from 'axios'
import Card from './Card'
import ViewAll from './ViewAll'


function SectionTopSelling() {
    const [products, setProducts]=useState([])
    const[loading ,setLoading]=useState(true)


    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then(res=>{
        setProducts(res.data)
        setLoading(false)
      })
  
    },[])
     const filteredProducts=products.filter(item=>item.rating.count>=430).slice(0,4)
     if (loading) {
      return(
      <div className='mx-20 lg:mx-50 my-20 lg:my-50'>
        <div className=' md:my-60 '>
          <div className='text-center my-10'>
            <TitleSection title="NEW ARRIVALS"/>
          </div>
          <div className='flex  flex-wrap items-center gap-30 md:my-50'>
            {[1,2,3,4].map(i=>(
              <div key={i} className='a animate-pulse w-280 h-410 bg-white rounded-xl shadow-md p-20'>
                <div className='bg-gray-200 h-200 w-full rounded-xl mb-10'></div>
                <div className='bg-gray-200 h-20 w-3/4 rounded mb-4'></div>
                <div className='bg-gray-200 h-20 w-1/2 rounded mb-4'></div>
                <div className='bg-gray-200 h-20 w-1/3 rounded '></div>
  
              </div>
            )) }
          </div>
        </div>
      </div>
      )
     }
  return (
   <>
    <div className='mx-20 lg:mx-50 my-20 lg:my-50  '>
    <div className=' md:my-60 '>
      <div className='text-center my-10'>
      <TitleSection title="TOP SELLING PRODUCTS"/>
      </div>
  
      <div className='md:flex flex-wrap items-center gap-30 md:my-50'>
        {
          filteredProducts.map((item ,index)=>(
            <div  key={index} className='md:mt-0 mt-20'>
                <Card item={item}/>
            </div>
          
          ))
        }
      </div>
      <div className='text-center  my-10'>
      <ViewAll />
      </div>
     
    </div>
  </div>

  
   </> 
   
  )
}

export default SectionTopSelling