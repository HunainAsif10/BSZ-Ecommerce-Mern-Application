import React from 'react'
import AboutComponent from '../../components/userComponents/AboutComponent'
import Choose from '../../components/userComponents/Choose'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'
import Team from '../../components/userComponents/Team'

export default function About() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <AboutComponent/>
      <Team/>
      <Choose/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
