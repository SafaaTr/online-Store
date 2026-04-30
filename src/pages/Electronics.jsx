import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import Card from '../components/Card'
import TitleSection from '../components/TitleSection'
import Footer from '../components/Footer'
import { useOutletContext } from 'react-router-dom'
import MobileFilterDrawer from "../components/MobileFilterDrawer";
import DesktopFilterSidebar from "../components/DesktopFilterSidebar";

function Electronics() {
  const[products ,setProducts]=useState([])
  const { searchValue } = useOutletContext();
  const [price, setPrice] = useState(260);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const[loading ,setLoading]=useState(true)


  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
      setProducts(res.data)
      setLoading(false)
    })
    .then(err=>{
      console.log("error ",err)
      setLoading(false)
    })

  })
 
  const searchFiltered=products.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
  .filter(item=>item.price<=price)//
  .filter(item=>item.rating.rate >= rating)//
  .filter(item =>
    selectedCategories.length === 0 
      ? true 
      : selectedCategories.includes(item.category)
  );  
  const filteredProducts=searchFiltered.filter(item=>item.category==="electronics")


  if (loading) {
    return(
      <div className='mt-120 md:mt-170 md:mx-70 px-20 mb-20 md:mb-60 '>
        <div className='mb-30 text-start'>
          <TitleSection title="women's clothing" />
        </div>
        <div className='md:flex  justify-between gap-10  items-start'>
          <div className='  hidden md:block  w-250 sticky top-150'>
            <DesktopFilterSidebar
            price={price}
            setPrice={setPrice}
            rating={rating}
            setRating={setRating}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className='grid md:grid-cols-3 gap-12 mt-20'>
            {[1,2,3,4].map(i=>(
              <div key={i} className='animate-pulse md:w-300 bg-white rounded-xl shadow-md p-20'>
                <div className="bg-gray-200 h-150 w-full rounded-xl mb-10"></div>
                <div className="bg-gray-200 h-20 w-3/4 rounded mb-4"></div>
                <div className="bg-gray-200 h-20 w-1/2 rounded mb-4"></div>
                <div className="bg-gray-200 h-20 w-1/3 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
   }

  return (
   <>
   <div className=' mt-120 md:mt-170 md:mx-70 px-20 mb-20 md:mb-60 '>
      <div className='mb-30 text-start'>
        <TitleSection title="electronics" />
      </div>
      <div className=' md:flex justify-between items-start '>
        <button 
          className="md:hidden bg-black text-white px-20 py-10 rounded-lg mb-20"
          onClick={() => setShowMobileFilter(true)}
        > Filters</button>

        <MobileFilterDrawer
          show={showMobileFilter}
          close={() => setShowMobileFilter(false)}
          price={price}
          setPrice={setPrice}
          rating={rating}
          setRating={setRating}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <DesktopFilterSidebar
          price={price}
          setPrice={setPrice}
          rating={rating}
          setRating={setRating}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className='md:grid flex flex-wrap  lg:grid-cols-3 gap-12 mt-20'>
        {  filteredProducts.length===0 ?
          (  <p className="text-xl font-semibold text-gray-700"> No products found</p>
          ):(
            filteredProducts.map((item ,i)=>(
              <div className='' key={i}><Card item={item}/>
              </div>
              
            ))
          )
          }
        </div>
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Electronics