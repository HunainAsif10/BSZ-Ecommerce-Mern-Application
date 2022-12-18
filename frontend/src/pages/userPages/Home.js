import React from 'react'
import Choose from '../../components/userComponents/Choose'
import CopyRight from '../../components/userComponents/CopyRight'
import Featured from '../../components/userComponents/Featured'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'
import Newsletter from '../../components/userComponents/Newsletter'
import ShowCase from '../../components/userComponents/ShowCase'
import Slider from '../../components/userComponents/Slider'

export default function Home() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Slider/>
        <Featured/>
        <Choose/>
        <ShowCase/>
        <Newsletter/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}
