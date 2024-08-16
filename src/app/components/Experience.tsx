import React from "react";
import { motion } from "framer-motion";
const experiences = [
  {
    id: 1,
    period: "2022 - Present",
    title: "Frontend developer",
    company: "Ozitech ",
  },
  {
    id: 2,
    period: "2021 - 2022",
    title: "Full Stack Web Developer",
    company: "Parsons",
  },
];

const education = [
  {
    id: 1,
    period: "2020 - 2023",
    course: "BSc Computer Science",
    institution: "University Of Lagos",
  },
  {
    id: 2,
    period: "2020 - 2023",
    course: "BSc Computer Science",
    institution: "University Of Lagos",
  },
];
//@ts-ignore
const Experience = ({theme}) => {
  return (
    <div className="mt-[5rem]  grid sm:grid-cols-2 grid-cols-1 lg:max-w-[1350px] py-14 xl:gap-14 sm:gap-6 md:max-w-[1000px]  w-[95%] mx-auto">
      <motion.div initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{once: true}}
        transition={{ duration: 1.5 }} className="w-[100%]">
        <h1 className="  text-grad font-bold py-1  xl:text-4xl lg:text-3xl px-3  text-grad text-[1.8rem] ">My Experenice</h1>
        <div className="mt-3 sm:mt-8 ">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className={`flex mt-3 rounded-xl p-4  spa flex-col space-y-2 ${theme == 'dark' ? ' bg-[#140C1C] text-white' : 'bg-[#ffff] text-[rgb(42,20,84)] '} `}>
              <h2 className="text-[#7850F7] font-bold text-base">{experience.period}</h2>
              <h1 className="sm:text-xl text-xl ">{experience.title}</h1>
              <p className="sm:text-lg text-lg ">{experience.company}</p>
            </div>
          );
        })}
        </div>
       
      </motion.div>

      <motion.div initial={{ x: 100, opacity: 0, scale: 0.8 }}
       viewport={{once: true}}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }} className="w-[100%]  mt-6">
        <h1 className=" xl:text-4xl lg:text-3xl px-3  text-grad text-[1.8rem]  text-grad font-bold py-1  ">My Education</h1>
       
        <div className="mt-3 sm:mt-8 " >
        {education.map((edu) => {
          return (
            <div key={edu.id} className= {`flex mt-3 rounded-xl p-4  flex-col space-y-2  ${theme == 'dark' ? ' bg-[#140C1C] text-white' : 'bg-[#ffff] text-[#2A1454] '} `}>
            <h2 className="text-[#7850F7] font-bold  text-base">{edu.period}</h2>
            <h1 className="sm:text-xl text-xl ">{edu.course}</h1>
            <p className="sm:text-lg text-lg ">{edu.institution}</p>
          </div>
          );
        })}
        </div>
       
      </motion.div>
    </div>
  );
};

export default Experience;
