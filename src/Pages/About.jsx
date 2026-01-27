import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function About() {
  return (
    <div>
      <section id='about' className='max-w-6xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4'>About Me</h2>

        <p className='text-gray-400 text-lg'>
          I am an ICT Management student at Norton University,
          <span className='text-blue-500 font-semibold ml-2'>
            <Typewriter
              words={[
                'interested in Web Development',
                'Front-End Developer',
                'React JS Developer',
                'Tailwind CSS'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>

      </section>
    </div>
  )
}

export default About