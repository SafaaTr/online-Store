import React from 'react'
import {NavLink} from 'react-router-dom'
import Header from '../components/Header'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import SectionNew from '../components/SectionNew'
import TopRated from '../components/TopRated'
import SectionTopSelling from '../components/SectionTopSelling'


function HomePage() {
  
  return (
    <div className='mt-0 md:mt-50'>
        {/* <h1>Home</h1>
        <NavLink to="/auth">log</NavLink> */}
        <Header/>
        <Brands/>
        <SectionNew/>
        <TopRated/>
        <SectionTopSelling/>
        <Footer/>
  
    </div>
  )
}

export default HomePage