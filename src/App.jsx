import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/experience/Exp'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'

export default function App(){
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Exp/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}
