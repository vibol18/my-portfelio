import React from "react";
import { motion } from "framer-motion";

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
    name: "MongoDB",
    level: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s",
  },
  {
    name: "PHP",
    level: 75,
    image: "https://www.php.net/images/meta-image.png",
  },
];

function Skill() {
  return (
    <section id="skills" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Skills
      </h2>

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-6 bg-gray-800 p-4 rounded-lg shadow"
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />

            <div className="flex-1">
              <div className="flex justify-between font-semibold text-white">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 h-3 rounded mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-blue-500 h-3 rounded"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Skill;
