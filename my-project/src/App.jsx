import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import SkillsLevel from './Components/SkillsLevel'

const App = () => {
  return (
    <div className='App'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <SkillsLevel />
        <Contact />
        <Footer />
    </div>
  )
}

export default App