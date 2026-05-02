import React, { useEffect, useState } from 'react'
import TitleSection from '../components/TitleSection'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function CartPage() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
 

  //====total====
  const total=cart.reduce((sum,item)=>sum+item.price *item.quantity ,0)
  //===islogin===
 
 
 
  ///====count(+++)========
  const increase=(id)=>{
    const update = cart.map(item=>
      item.id ===id ?{...item ,quantity:item.quantity + 1} :item
    )
    setCart(update)
    localStorage.setItem("cart",JSON.stringify(update))
    window.dispatchEvent(new Event("storage"))
  }
   ///====count(---)========
   const decrease=(id)=>{
    const update=cart.map(item=>
    item.id === id &&item.quantity >1 ? {...item ,quantity:item.quantity-1}:item)
    setCart(update)
    localStorage.setItem("cart",JSON.stringify(update))
    window.dispatchEvent(new Event("storage"))
   }

  const removeItem=(id)=>{
    const updated=cart.filter(item=>item.id !=id)
    setCart(updated)
    localStorage.setItem("cart",JSON.stringify(updated))
    window.dispatchEvent(new Event("storage"))//هي وسيلة "لإعلان" الخبر لبقية أجزاء الكود. اذا فكرت غير شي مخزن 
    window.location.reload()
    
  }
  return (
    <div className='mt-120 md:mt-170'>
     <div className='md:mx-70 mx-20'>
    
        <div className=' text-center my-40'>
            
          {
            cart.length===0?   <TitleSection title="Your cart is empty" className={`text-center`} /> :   <TitleSection title="Your cart" className={`text-start`} />
          }
        </div>
       
        <div>
        {cart.map(item => (
                  <div key={item.id} className=" md:w-1200 md:flex gap-30 my-10 justify-between px-20  py-20 items-center border rounded-2xl ">
                    <div className=' w-160 h-160 bg-gray-100 flex justify-center items-center rounded-2xl md:mx-0 mx-auto '>
                    <img src={item.image} className="w-full h-full" />
                    </div>
                    <div>
                      <h2 className='font-semibold md:text-start text-center my-10'>{item.title}</h2>
                      <p className='text-center pt-10 md:mb-0 mb-10  text-[#00000099]'>${item.price}</p>
                    </div>
                    <div className='w-full md:w-200 h-50 bg-gray-300 rounded-3xl flex justify-between items-center px-20'>
                        <button className='block' onClick={()=>increase(item.id)}><FaPlus size={20}/> </button>
                        <span className='text-center'>{item.quantity}</span> 
                        <button className='block font-black' onClick={()=>decrease(item.id)} ><FaMinus size={20}/> </button>
                    </div>
                    <button 
                        onClick={() => removeItem(item.id)}
                        className="md:w-100 w-full  h-45 px-4 py-2 mt-10 md:mt-4 bg-red-600 text-white rounded-2xl " 
                      >Remove
                    </button>
                  </div>
                ))}
                <div className="text-right mt-20">
                  <h2 className="text-2xl font-semibold">Total: ${total.toFixed(2)}</h2>
                </div>

        </div>
       
          <div className='mx-auto my-50 text-center'>
          <button className='w-170 h-55 bg-black text-center rounded-3xl   transition-all duration-300  hover:-translate-y-3 hover:shadow-2xl hover:tran text-white'> <Link to="/shop">Continue Shopping</Link> </button>
          </div>
     </div>
    <Footer/>
    </div>
  )
}

export default CartPage