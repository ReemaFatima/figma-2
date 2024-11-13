import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Project from './components/Project'
import Extension from './components/Extension'
import Customize from './components/Customize'
import Work from './components/work'
import Sponsers from './components/Sponsors'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Extension />
      <Customize />
    <Work />
    <Sponsers/>
    <Footer/>
    </div>
  )
}

export default Home;