import React from 'react'
import Form from './Form'



function SignUP() {
  const inputData=[
    {
      inputs:[
        {
         label:"Name",
          type:"text",
          name:"full-name",
          placeholder:"Full name"
        },
       
        {
         label:"Email",
          type:"email",
          name:"email",
          placeholder:"your Email"
      },
      { 
       label:"Password",
        type:"password",
        name:"password",
        placeholder:"your password"
      },
   
    ]
    },  
    {
      type:"submit",
      name:"submit",
      text:"Sign up",
      link:"/"
    }
  ]
  const handleSignUp=(formData)=>{//تخزين 
    localStorage.setItem("user-name", formData["full-name"])
    localStorage.setItem("isLoggedIn" , "true")
    window.location.href="/"
  }
  return (
    <div className='md:ml-100 m-20  md:my-170 '>
      <h1 className=' text-3xl font-semibold   mb-20 text-center'>Sign UP</h1>
        <Form
        linkTo="signin"
        textLink="Sign In"
        textFooter="Already have an account?"
        inputData={inputData}
        onSubmit={handleSignUp}
        />
   
    </div>
  )
}

export default SignUP