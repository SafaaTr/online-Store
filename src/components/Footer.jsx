import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import badge from '/images/Badge.png'
import badge1 from '/images/Badge1.png'
import badge2 from '/images/Badge2.png'
import badge3 from '/images/Badge3.png'
import badge4 from '/images/Badge4.png'

function Footer() {
  const contentFooter=[
    {
      address:"COMPANY",
      title1:"About",
      title2:"Features",
      title3:"Works",
      title4:"Career",
    },
    {
      address:"HELP",
      title1:"Customer Support",
      title2:"Delivery Details",
      title3:"Terms & Conditions",
      title4:"Privacy Policy",
    },
    {
      address:"FAQ",
      title1:"Account",
      title2:"Manage Deliveries",
      title3:"Orders",
      title4:"Payments",
    },
    {
      address:"RESOURCES",
      title1:"Free eBooks",
      title2:"Development Tutorial",
      title3:"How To - Blog",
      title4:"Youtube Playlist",
    }
  ]
  const icons=[
   {
    iconsocial:[
      {icon:<FaTwitter className='hover:text-white' />, link:"https://x.com/?lang=ar"},
      {icon:<FaFacebookF className='hover:text-white'/> , link:"https://www.facebook.com/"},
      {icon:<FaInstagram className='hover:text-white'/> , link:"https://www.instagram.com/?hl=ar"},
      {icon:<FaGithub className='hover:text-white'/> , link:"https://github.com/"}
    ]
   },
   {
    iconBadge:[
      {icon:badge , link:"#"},
      {icon:badge1 ,link:"#"},
      {icon:badge2 ,link:"#"},
      {icon:badge3 ,link:"#"},
      {icon:badge4 ,link:"#"},
    ]
   },
  ]
  return (
    <footer className=' bg-[#f0f0f0] px-20 py-30 md:px-70 md:py-60 '>
      <div className=' flex flex-wrap justify-between items-center gap-10'>
        <div>
          <h1 className='text-4xl font-bold mb-10'>Shop.Co</h1>
          <p className='md:w-400 text-[#595959] text-[14px] my-20'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className='flex gap-6 mt-30 '>
            {
              icons[0].iconsocial.map((item ,index)=>(
                <p key={index} className='bg-white border-b-gray-400 hover:bg-black hover:text-white w-35 h-35 rounded-[50%] flex  justify-center items-center'><Link to={item.link} >{item.icon}</Link></p>
              ))
            }
          </div>
        </div>
        {
          contentFooter.map((item ,index)=>(
            <div key={index}>
              <h2 className=' font-semibold mb-20'>{item.address}</h2>
              <p className='text-[14px] font-sans my-4 text-[#595959] hover:text-black'><a href="#">{item.title1}</a> </p>
              <p className='text-[14px] font-sans my-4 text-[#595959] hover:text-black'> <a href="#">{item.title2}</a></p>
              <p className='text-[14px] font-sans my-4 text-[#595959] hover:text-black'><a href="#">{item.title3}</a></p>
              <p className='text-[14px] font-sans my-4 text-[#595959] hover:text-black'><a href="#">{item.title4}</a></p>
            </div>
          ))
        }
      </div> 
      <div className=' border-t border-[#595959] md:mt-40  md:flex justify-between items-center pt-40'>
       <p className='text-[#595959] text-[14px]'>Shop.co © 2000-2023, All Rights Reserved <span className='font-semibold text-black'>By Safaa Tr</span></p>
       <div className='flex items-center gap-6'>
         {
          icons[1].iconBadge.map((item,index)=>(
            <Link to="#"><img key={index} src={item.icon} alt="iconBadge" /></Link>
            
          ))
         }
       </div>
      </div>

    </footer>
  
  )
}

export default Footer