import React, { useState } from 'react'
import AnimatedText from '../animatte/AnimatedText'
import { motion } from 'motion/react'

function Navbar() {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <nav className='fixed w-full bg-gray-800 p-4 z-50 text-white'>
            <div className="flex justify-between max-w-6xl mx-auto">
                <AnimatedText text={`Chhorn Vibol`} className='font-bold text-xl'/>
                <div className="space-x-4 hidden md:block">
                    <a href="#">About</a>
                    <a href="#">Skill</a>
                    <a href="#">Project</a>
                    <a href="#">Contact</a>
                </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 overflow-hidden  transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#skill">Skill</a>
          <a onClick={() => setOpen(false)} href="#project">Project</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
         
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
