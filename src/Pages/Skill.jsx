import React from "react";
import { motion } from "motion/react";
const skills = [
  {
    name: "React",
    level: 69,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Laravel",
    level: 67,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    name: "JavaScript",
    level: 75,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Tailwind CSS",
    level: 65,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name:"MongoDb",
    level:50,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s",
  },
  {
    name:"Php",
    level:75,
    image:"https://www.php.net/images/meta-image.png",
  }
];

function Skill() {
  return (
    <section id="skills" className="max-w-6xl mx-auto p-6">
      <motion.ul animate={{ rotate: 360 }} className="bg-red-500"/>
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-6 bg-gray-800 p-4 rounded-lg shadow"
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />

            <div className="flex-1">
              <div className="flex justify-between font-semibold">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              
              <div className="w-full bg-gray-700 h-3 rounded mt-2">
                <div
                  className="bg-blue-500 h-3 rounded transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skill;
