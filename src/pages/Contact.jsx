import React from 'react'
import Form from '../components/Form'
import TitleSection from '../components/TitleSection'
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from '../components/Footer';

function Contact() {
  const inputData=[
    {
      inputs:[
        {
         label:"Name",
          type:"text",
          name:"full-name",
          placeholder:"First name"
        },
       
        {
         label:"Email",
          type:"email",
          name:"email",
          placeholder:"your Email"
      },
   
   
    ]
    }, 
    { 
      label:"Message",
       type:"textarea",
       name:"message",
       placeholder:"Tell us about your inguiry .."
     }, 
    {
      type:"submit",
      name:"send",
      text:"Send Message",
    }
  ]
  const cardContact=[
    {
      icon:<MdEmail size={30} className='text-center'/>,
      communication:"hello@shop.co",
      paragraph:"Send us an email"
    },
    {
      icon:<FaPhoneAlt  size={30}/>,
      communication:"+1 (555) 123-4567",
      paragraph:"Call us anytime"
    },
    {
      icon:<MdLocationOn  size={30}/>,
      communication:"123 Fashion St, Style City",
      paragraph:"Call us anytime"
    }
  ]

  return (
    <>
    <div className='md:mt-200  mt-100' >
     <div>
     <div className='text-center font-bold mb-50'>
          <TitleSection title="Contact Information"/>
         <div className='flex flex-wrap items-center justify-center gap-18 my-40 lg:my-90'>
          {
            cardContact.map((item ,index)=>(
              <div key={index} className='h-150 w-250 bg-[#f0f0f0] text-center flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl'>
                <span className='' >{item.icon}</span>
                <p className='my-8 font-semibold'>{item.communication}</p>
                <p className='font-normal text-[12px]'>{item.paragraph}</p>
              </div>
            ))
          }
         </div>
        </div>
     </div>
      <div className='bg-mauve-100 py-50'>
        <div className='text-center font-bold mb-50'>
          <TitleSection title="Send us a Message"/>
        </div>
        <div className='flex justify-center items-center '>
        <Form inputData={inputData}/>
        </div>
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Contact