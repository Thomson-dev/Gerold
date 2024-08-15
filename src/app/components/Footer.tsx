import React from "react";
import logo from "../assert/logo-dark.png";
import Image from "next/image";
const FooterItems = [
  {
    id: 1,
    label: "About",
    link: "/about",
  },
  {
    id: 2,
    label: "Services",
    link: "/services",
  },
  {
    id: 3,
    label: "Portfolios",
    link: "/portfolios",
  },
  {
    id: 4,
    label: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div className="text-white flex justify-center flex-col py-14  items-center bg-[#2E165B]">
      <Image src={logo} alt="logo" className="max-w-[80px] aspect-square" />
      <div className="flex-row  sm:space-x-9 space-x-6 font-semibold mt-6 text-white">
      {FooterItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="text-[#ffff] text-base "
        >
          {item.label}
        </a>
      ))}
      </div>
     
    </div>
  );
};

export default Footer;
