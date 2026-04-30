import React from 'react'
import Form from './Form'

function SignIn() {
  const inputData=[
    {
      inputs:[{
       label:"Name",
        type:"text",
        name:"name",
        placeholder:"your Name"
      },
      {
       label:"Password",
        type:"password",
        name:"password",
        placeholder:"your password"
      },]
    },  
    {
      type:"submit",
      name:"submit",
      text:"Log In",
      link:"/"
    }
  ]
  const handleLogin=(formData)=>{
    localStorage.setItem("user-name", formData.name)
    localStorage.setItem("isLoggedIn" , "true")
    window.location.href="/"
  }
  
  return (
    <div className='md:ml-100 md:my-170 m-20 '>
       <h1 className=' text-3xl font-semibold mb-20 text-center'>Sign In</h1>
        <Form
        linkTo="/auth"
        textFooter="Don’t have an account?"
        textLink="Sign Up"
        inputData={inputData}
        onSubmit={handleLogin}

        />
        
    </div>
  )
}

export default SignIn