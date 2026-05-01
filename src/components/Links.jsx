
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import {IoSearch } from "react-icons/io5";
import ProfileUser from './ProfileUser';

function Links({onClickItem ,  setSearchValue }) {
    const [categories , setCategories ]=useState(false)
    const[showSearch , setShowSearch]=useState(true)
    const isLoggedIn = localStorage.getItem("isLoggedIn") ==="true";
    const [cartCount, setCartCount] = useState(0); //عداد السلة 
    useEffect(()=>{
      const updateCart=()=>{
        const cart =JSON.parse(localStorage.getItem("cart"))||[]
        const count= cart.reduce((total, item)=>total+item.quantity ,0)
        setCartCount(count)
      }
      updateCart()
      window.addEventListener("storage" ,updateCart)
      return ()=> window.addEventListener("storage" ,updateCart)
    })


    const mainLinks=[
        {path:"/", name:"Home"},
        {path:"/shop", name:"Shop"},
        {path:"/categories", name:"Categories"},
        {path:"/contact", name:"Contact Us"},
        {isSearch:true, name:"search"},
        {path:"/cart", icon:<IoCartOutline size={30} color='black' />},
        // {path:"/auth",icon:<IoPersonCircleOutline size={30} color='black'/> },
      
    ]
    const CategoriesLinks=[
        {path:"/categories/electronics", name:"electronics"},
        {path:"/categories/jewelery", name:"jewelery"},
        {path:"/categories/mensclothing", name:"men's clothing"},
        {path:"/categories/womensclothing", name:"women's clothing"},
    ]
  return (
    <div className='block   md:flex items-center  justify-between gap-30 '>
          {/* زر البحث فوق كل شي داخل المينيو */}
        <div className='relative flex items-center  my-10 md:hidden'>
            <input 
                type="text"
                onChange={(e)=>setSearchValue(e.target.value)} 
                placeholder='Search for products..'
                className="w-200 px-10 bg-[#f3f3f3dc] rounded-2xl h-40 shadow outline-0"
            />
        </div>
         {mainLinks.map((item , index )=>(
            <div key={index} className=' relative md:my-0  my-20'>
             {
                item.name==="Categories" ?(
                  <>
                  <button onClick={()=>{ setCategories(!categories)}} className=' mt-3  flex font-medium transition-colors duration-200 hover:bg-black hover:text-white hover:rounded-lg hover:py-10 hover:px-10 '><IoMdArrowDropdown size={30}/> {item.name}</button>
                  {
                      categories &&(
                      <div className=' md:absolute w-200 left-0  bg-white  z-50 mt-2 py-4 shadow-2xl pl-10 '>
                        {
                          CategoriesLinks.map((child ,i)=>(
                            <NavLink
                              key={i}
                              onClick={()=>{setCategories(false)
                                  onClickItem && onClickItem()
                              }}
                              to={child.path} 
                              className={`block px-4 py-2  hover:bg-gray-100 `}>{child.name}    
                            </NavLink>
                       ))}
                      </div>
                      )}
                  </>
              ): item.isSearch ? ( 
                  <div className=' hidden sm:hidden   md:flex relative  items-center my-14 md:my-0'>
                      <button onClick={()=>setShowSearch(!showSearch)} className=''  >
                        
                      </button>
                      {
                          
                        <input 
                          type="text"
                          name={item.name}
                          onChange={(e)=>setSearchValue(e.target.value)} 
                          placeholder='Search for products..'
                          className=" w-200   lg:w-500 px-10 bg-[#f3f3f3dc] rounded-2xl h-40 shadow outline-0 "
                        />
                          
                      }
                     
                  </div>
              ):(
                  <div className=' relative  my-6'> 
                      <NavLink
                        onClick={()=>{onClickItem && onClickItem()}}
                        to={item.path} 
                        className={` group font-medium  transition-colors duration-200 hover:bg-black hover:text-white hover:rounded-lg hover:py-10 hover:px-10 my-14 md:my-0  `}>
                        {item.name}{item.icon}
                      </NavLink>
                      {
                        item.path==="/cart" && cartCount >0 &&(
                        <span className='  absolute -top-10 left-0 bg-red-700 text-white  rounded-full flex justify-center items-center w-22 h-22'>
                          {cartCount}
                        </span>
                        )
                      }
                      

                  </div>
              )   

                } 
                
              </div>
            ))
        }
        <div>
          {
            !isLoggedIn ?(
              <NavLink
                to="/auth" 
                className={` group font-medium  transition-colors duration-200 hover:bg-black hover:text-white hover:rounded-lg hover:py-10 hover:px-10  `}>
                <IoPersonCircleOutline size={30} color="black" />              
              </NavLink>
                            
            ):(
              <ProfileUser/>
            )
          }
        </div>
     
    </div>
  )
}

export default Links