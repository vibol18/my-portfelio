import React from 'react'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skill from './Pages/Skill'
import ProjectSlider from './Pages/ProjectSlider'
import Project from './Pages/Project'
import Navbar from './Component/Navbar'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      
      <Hero/>
      <About/>
      <Skill/>
      <ProjectSlider/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
