"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import about from "@/app/assert/about-1.png";
import { motion } from "framer-motion";
//@ts-ignore
const About = ({theme}) => {
  return (
    <motion.div
    initial={{ x: -100, opacity: 0, scale: 0.8 }}
    viewport={{once: true}}
    whileInView={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
      className="grid lg:grid-cols-2 grid-cols-1  shadow-sm gap-5 mt-7 "
    >
      <div className= {`shadow-md  w-full   rounded-xl xl:p-10 p-5   ${
          theme == "dark" ? "bg-[#140C1C] border border-[#261846] " : "bg-[#F6F3FC] "
        } ` }>
        <h4 className="text-grad sora font-bold xl:text-5xl lg:text-4xl  text-grad text-[2rem]  leading-tight  max-w-xl  ">
          Achievements in my professional life.{" "}
        </h4>

        
        <p className= {`mt-5 leading-relaxed  max-w-xl xl:text-xl sm:text-lg text-base font-thin sora   ${
              theme == "dark" ? "text-[#DDDDDD]" : "text-black"
            }  `}>
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I have done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use.
        </p>

        <div className="mt-16">
          <button className="py-3 w-40 shadow-md  bg-[#8750F7] font-bold rounded-full text-white ">
            Contact me
          </button>
        </div>
      </div>
      <div className= {` w-full    shadow-md xl:p-10 p-5    rounded-xl  ${
          theme == "dark" ? "bg-[#140C1C] border border-[#261846] " : "bg-[#F6F3FC] "
        }`}>
        <h5 className="text-2xl font-semibold text-grad ">
          Interface Designer
        </h5>
        <p className= {`mt-2 xl:text-xl sm:text-lg text-base  max-w-xs sora ${
              theme == "dark" ? "text-[#DDDDDD]" : "text-black"
            }  `}>
          As a UI designer, I work closely with clients to understand their
          needs and goals for their software or website.
        </p>
        <Image
          src={about}
          className=" max-w-full w-full h-auto object-cover rounded-xl   "
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default About;
