import React from 'react'

function ProfileUser() {
    const UserName=localStorage.getItem("user-name")
  return (
    <div>
        <h1 className=''> Hi,<span className='font-semibold'>{UserName}</span></h1>
        <button
        onClick={()=>{
            localStorage.removeItem("user-name")
            localStorage.removeItem("isLoggedIn")
            localStorage.removeItem("cart")
            window.dispatchEvent(new Event("storage"))
            window.location.reload()
        }}
         className=" px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
             Logout
        </button>
    </div>
  )
}

export default ProfileUser