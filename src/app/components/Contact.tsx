import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
//@ts-ignore
const Contact = ({ theme }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  space-y-10 py-[5rem] lg:gap-10 xl:gap-32 ">
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className={`flex flex-col 
           shadow-md xl:p-9 p-2 py-7 rounded-xl w-full ${
             theme == "dark" ? "bg-[#140C1C] " : "bg-[#ffff] "
           }`}
      >
        <h1 className=" text-left text-grad font-bold  text-[1.8rem]">
          Let’s work together!
        </h1>
        <p
          className={` xl:text-xl sm:text-lg text-base    leading-6 max-w-lg tracking-wide   ${
            theme == "dark" ? "text-white" : "text-[#653ABC]"
          }  `}
        >
        I design and code beautifully simple things. I love what I do
        </p>
        <div className="flex-col flex mt-5 space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 ">
            <input
              placeholder="First Name"
              className={` py-3  sm:w-[45%] w-full text-base px-3  rounded-lg border border-[#484545]   ${
                theme == "dark"
                  ? "bg-[#000000] text-white outline-[#653ABC] outline-1"
                  : "bg-[#F6F3FC] text-black outline-none "
              }  `}
            />
            <input
              placeholder="Last Name"
              className={` py-3  sm:w-[45%] w-full text-base px-3  rounded-lg border border-[#484545]   ${
                theme == "dark"
                  ? "bg-[#000000] text-white outline-[#653ABC] outline-1"
                  : "bg-[#F6F3FC] text-black outline-none "
              }  `}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0">
            <input
              placeholder="Email Address"
              className={` py-3  sm:w-[45%] w-full text-base px-3  rounded-lg border border-[#484545]   ${
                theme == "dark"
                  ? "bg-[#000000] text-white outline-[#653ABC] outline-1"
                  : "bg-[#F6F3FC] text-black outline-none "
              }  `}
            />
            <input
              placeholder="Phone Number"
              className={` py-3  sm:w-[45%] w-full text-base px-3  rounded-lg border border-[#484545]   ${
                theme == "dark"
                  ? "bg-[#000000] text-white outline-[#653ABC] outline-1"
                  : "bg-[#F6F3FC] text-black outline-none "
              }  `}
            />
          </div>

          <div className="w-full">
            <textarea
              placeholder="Message"
              className={`bg-[#000000] sm:w-[95%] w-full   text-base px-3 py-3 rounded-lg border border-[#484545]  text-[#DDDDDD]  ${
                theme == "dark"
                  ? "bg-[#000000] text-white outline-[#653ABC] outline-1"
                  : "bg-[#F6F3FC] text-black outline-none "
              } `}
              cols={40}
              rows={10}
            />
          </div>
          {/* @ts-ignore */}
          <Button
            ripple={true}
            size={undefined } 
            className="w-40 py-3 normal-case text-base bg-[#653ABC]   rounded-full"
          >
            Send Message
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-full flex justify-center space-y-9  flex-col "
      >
        <div className="flex sm:gap-14  gap-5   items-center">
          <div
            className={`bg-[#653ABC] rounded-full p-3 ${
              theme == "dark" ? "text-white" : "text-white"
            } `}
          >
            <FaPhoneVolume className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <div className="">
              <h6
                className={`text-lg ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                Phone
              </h6>
              <h1
                className={`sm:text-xl text-lg  ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                09159163256
              </h1>
            </div>
          </div>
        </div>

        <div className=" flex sm:gap-14 gap-5  items-center">
          <div
            className={`bg-[#653ABC] rounded-full p-3 ${
              theme == "dark" ? "text-white" : "text-white"
            } `}
          >
            <MdEmail className="text-2xl " />
          </div>
          <div className="flex flex-col">
            <div className="">
              <h6
                className={`sm:text-xl text-lg ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                Email
              </h6>
              <h1
                className={`sm:text-xl text-lg ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                {" "}
                tomsinonyedikachi@gmail.com
              </h1>
            </div>
          </div>
        </div>

        <div className="flex sm:gap-14 gap-5  items-center">
          <div
            className={`bg-[#653ABC] rounded-full p-3 ${
              theme == "dark" ? "text-white" : "text-white"
            } `}
          >
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <div className="">
              <h6
                className={`text-lg ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                Address
              </h6>
              <p
                className={`sm:text-xl text-lg max-w-72 ${
                  theme == "dark" ? "text-white" : "text-[#653ABC]"
                } `}
              >
                Nigerial, Lagos State
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
