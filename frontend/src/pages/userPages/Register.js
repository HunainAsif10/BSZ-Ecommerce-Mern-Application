import React from 'react'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'
import RegisterComponent from '../../components/userComponents/RegisterComponent'

export default function Register() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <RegisterComponent/>
      <Footer/>
      <CopyRight/>

    </div>
  )
}
