import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ScrollIndicator from './components/ScrollIndecator/ScrollIndecator';
import CardsScreoll from './components/CardsScroll/CardsScreoll';
import Footer from './components/Footer/Footer';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <ScrollIndicator />
      <CardsScreoll/>
      <Footer />
    </div>
  )
}
