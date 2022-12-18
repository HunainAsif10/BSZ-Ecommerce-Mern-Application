import React from 'react'
import CartComponent from '../../components/userComponents/CartComponent'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'

export default function Cart() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CartComponent/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
