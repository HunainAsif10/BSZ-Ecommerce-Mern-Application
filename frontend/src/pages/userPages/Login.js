import React from 'react'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import LoginComponent from '../../components/userComponents/LoginComponent'
import Navbar from '../../components/userComponents/Navbar'

export default function Login() {
  return (
    <div>
      <Header/>
     <Navbar/>
     <LoginComponent/>
     <Footer/>
     <CopyRight/>

    </div>
  )
}
