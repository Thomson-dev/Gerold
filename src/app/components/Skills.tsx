import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";
const skills = [
  { id: 1, name: "HTML5", proficiency: 92, icon: <FaHtml5 /> },
  { id: 2, name: "Node.js", proficiency: 80, icon: <FaNodeJs /> },
  { id: 3, name: "MongoDB", proficiency: 85, icon: <SiMongodb /> },
  { id: 4, name: "Tailwind CSS", proficiency: 99, icon: <RiTailwindCssFill /> },
  { id: 5, name: "React", proficiency: 89, icon: <FaReact /> },
  { id: 6, name: "JavaScript", proficiency: 93, icon: <IoLogoJavascript /> },
];



//@ts-ignore
const Skills = ({ theme }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0, scale: 0.8 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <h1 className="sora text-center text-grad font-bold  xl:text-5xl lg:text-4xl  text-grad text-[2rem]  ">
        My Skills
      </h1>
      <p
        className={`text-[#DDDDDD] text-center mt-1 max-w-2xl  mx-auto 
      xl:text-xl sm:text-lg text-base  font-normal ${
        theme == "dark" ? "text-[#DDDDDD]" : "text-black"
      } `}
      >
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and you customers.
      </p>

      <div className="grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 w-[95%] gap-6  mt-14 mx-auto justify-between">
        {skills.map((skill, index) => (
          <div className="">
            <div
              key={index}
              className="flex border hover:grow border-[#261846] hover:bg-[#2A1454] rounded-3xl w-[100%] py-8 items-center flex-col"
            >
              <h1
                className={`xl:text-7xl  text-5xl grow text-[#aea9a9] ${
                  skill.id == 1 ? "hover:text-orange-600 duration" : ""
                } ${skill.id == 2 ? "hover:text-green-700" : ""} ${
                  skill.id == 3 ? "hover:text-[#58B647] " : ""
                } ${skill.id == 4 ? "hover:text-[#3EBFF8]" : ""} ${
                  skill.id == 5 ? "hover:text-[#08D9FF]" : ""
                } ${skill.id == 6 ? "hover:text-[#F7CF00]" : ""}  `}
              >
                {skill.icon}{" "}
              </h1>
              <p className="text-lg  text-[#aea9a9] mt-3">
                {skill.proficiency}%
              </p>
            </div>

            <p
              className={`text-center mt-5 font-normal     ${
                theme == "dark" ? "text-[#DDDDDD]" : "text-[#8750F8]"
              } `}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
