import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from '../components/RatingStars'
import Footer from '../components/Footer';
import { FcCheckmark } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function ProductDetails() {
  const {id}=useParams()
  const[product, setProduct]=useState([])
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loginWarning, setLoginWarning] = useState(false);
 
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>setProduct(res.data))
  },[id])

  if (!product) return <p>Laoding...</p>
  //عداد
  const  increase =()=> setQuantity(prev=>prev + 1)
  const decrease=()=>{
    if (quantity > 1) {
      setQuantity(prev=> prev-1)
     
    }
  }
 const addCart=()=>{
  const isLoggedIn = localStorage.getItem("isLoggedIn") ==="true"//اذا المستخدم سجل دخول 
 if (!isLoggedIn) {

  setLoginWarning(true)
  setTimeout(() => setLoginWarning(false) ,2000); //الاشعار 
  return;
  }

  const cart =JSON.parse(localStorage.getItem("cart"))||[]
  const item={
    id:product.id,
    title:product.title,
    price:product.price,
    image:product.image,
    quantity:quantity,
  }
  const existing =cart.find(p=>p.id===product.id)
  if (existing) {
    existing.quantity +=quantity
    
  }else{
    cart.push(item)
  }
  localStorage.setItem("cart" , JSON.stringify(cart))
  //Toast الاشعار
  setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    //  تحديث عداد السلة
    window.dispatchEvent(new Event("storage"));
    // تغير حدث الزر
    setClicked(true);
    setTimeout(() => setClicked(false), 800);

 }
  return (
    <>
     <div>
        { loginWarning && (
          <div className="fixed top-50 right-20 bg-red-600 text-white px-20 py-10 rounded-xl shadow-2xl z-50">
            Please log in to add items to your cart
          </div>
        )}
    </div>
    {
      added && ( 
        <div className="fixed top-100 right-40 bg-white text-black px-30 py-20 rounded-xl shadow-2xl z-50 border border-b-emerald-700 
           transition-transform duration-300 translate-x-0">
          <p className='flex justify-center items-center gap-2'>
          <FcCheckmark size={20} /> Added to cart
          </p>
        </div>
      )}
    
    <div className='md:flex justify-between gap-20 items-center mt-120 md:my-100 my-30 md:mt-180 md:mx-70 mx-20'>
      <div className='md:w-400 md:h-300  bg-gray-100 rounded-2xl flex justify-center items-center'>
      <img src={product.image} alt={product.title} className='md:w-200 md:h-200  object-contain ' />
      </div>
     
      <div className='md:w-700 md:mt-0 mt-20'>
        <h1 className='text-xl md:text-3xl font-semibold my-10 md:w-[80%]'>{product.title}</h1>
        <div className='flex gap-30 my-20'>
          <RatingStars rate={product?.rating?.rate}/>
          <p className='text-[#00000099] text-[12px]'>{product?.rating?.rate}/5</p>
          <div className='md:ml-100'>
            {
             product.price <=50 ?   <button className='text-[12px] w-60 h-30 bg-[#fab9b9] text-red-500 rounded-2xl'><Link to={`/Product/${product.id}`}>On sale</Link></button> :""
            }
          </div>
        </div>
        <p className='font-bold text-2xl my-10'>${product.price}</p>
        <p className='md:w-[80%] py-20 '>{product.description}</p>
        <div className='md:flex block gap-40 pt-20 border-t border-[#4d4c4c99]'>
          <div className='w-200 h-60 bg-gray-300 rounded-3xl flex justify-between items-center px-20'>
          <button className='block' onClick={increase}><FaPlus size={20}/> </button>
          <span className='text-center'>{quantity}</span> 
          <button className='block font-black' onClick={decrease} ><FaMinus size={20}/> </button>
         
          </div>
          <button
            onClick={addCart}
            className='w-full bg-black text-white h-50 rounded-3xl text-center mt-10 md:mt-0 cursor-pointer  transition-transform duration-150 active:scale-95 '>
            {clicked ? <span className='flex items-center justify-center'>Added <FcCheckmark size={30}/></span>:"  Add to Cart"}
          </button>
        
                
             

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails