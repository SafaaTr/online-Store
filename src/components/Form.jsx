import React, { useState } from 'react'
import FormFooter from './FormFooter'
import { NavLink} from 'react-router-dom'

function Form({linkTo , textLink , textFooter, inputData ,onSubmit }) {
  const [formValues, setFormValues] = useState({});

  const handleChange=(e)=>{
    setFormValues({
      ...formValues ,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit(formValues)

  }
  return (
    <div className='md:w-404'>

      <form  onSubmit={handleSubmit} className='w-full'>
     {
      inputData.map((item ,index)=>(
        <div key={index}  className="">

         {
          item.inputs && item.inputs.map((input, i)=>(
            <div key={i} >
                <label htmlFor="" className='text-lg mb-4'>{input.label}</label>
                <input 
                  
                  type={input.type} 
                  placeholder={input.placeholder} 
                  name={input.name} 
                  className='w-full h-48 block outline-0 border border-[#5a5a5a] rounded-lg p-10 mb-8'
                  onChange={handleChange}  />
            </div>
           
            ))
         }
         {
          item.type==="textarea" &&(
            <div> <label htmlFor="">{item.label}</label>
               <textarea name={item.name} id="message" placeholder={item.placeholder} className='w-full h-100 block outline-0 border border-[#5a5a5a] rounded-lg p-10 mb-8'></textarea>
            </div>
           
          )
         }
        
         {
          item.type==="submit" &&(
             <button
                type={item.type} 
                name={item.name}
                className= {`w-full h-50 block outline-0  rounded-lg p-10 my-30 text-center text-white font-semibold bg-[#3A5B22] ${item.name === "send" ? " w-100 h-40 bg-black text-white hover:text-black hover:bg-white rounded-2xl text-center hover:border ":""}` } > 
                {/* <NavLink to={item.link}>
                  {item.text}
                </NavLink>  */}
                  {item.text}
               
             </button>
          )
         }
         
        </div>
      ))
     }
      <FormFooter
        linkTo={linkTo}
        textFooter={textFooter}
        textLink={textLink}
        className={'text-center'}
      />
      </form>
    </div>
  )
}

export default Form