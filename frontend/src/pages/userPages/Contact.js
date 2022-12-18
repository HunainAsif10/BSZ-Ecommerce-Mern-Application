import React from 'react'
import ContactComponent from '../../components/userComponents/ContactComponent'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'

export default function Contact() {
  return (
    <div>
      <Header/>
      <Navbar/>
       <ContactComponent/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
