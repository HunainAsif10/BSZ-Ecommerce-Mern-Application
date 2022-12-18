import React from 'react'
import CategoriesComponent from '../../components/userComponents/CategoriesComponent'
import CopyRight from '../../components/userComponents/CopyRight'
import Footer from '../../components/userComponents/Footer'
import Header from '../../components/userComponents/Header'
import Navbar from '../../components/userComponents/Navbar'

export default function Categories() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <CategoriesComponent/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
