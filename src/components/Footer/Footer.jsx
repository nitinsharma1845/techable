import React from "react";
import {FillButton} from '../index'
import logo from "../../assets/logo-3.png";
import image from "../../assets/gradient-1.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact Us", url: "/contact" },
  ];
  const services = [
    {
        name : 'Digital Marketing',
        url : '/'
    },
    {
        name : 'Web Development',
        url : '/'
    },
    {
        name : 'App Development',
        url : '/'
    },
    {
        name : 'API Integration',
        url : '/'
    },
    {
        name : 'Custom Projects',
        url : '/'
    },
    {
        name : 'Design & Editing',
        url : '/'
    },
  ]

  return (
    <div
      className="bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex container gap-10 py-15 justify-center ">
        <div  className="flex flex-col w-1/4">
          <img src={logo} alt="Techable-Australia" className="-mt-6" width={200} />
          <p className="w-[70%] text-gray-400 mb-4">367 George St, Sydney NSW 2000, Australia</p>
          <p className="text-gray-400">+61 1234567890</p>
          <p className="text-gray-400">+91 1234567890</p>
        </div>
        <div className="flex flex-col gap-5 w-1/4"> 
            <h1 className="text-2xl gradient-text font-semibold">Quick Links</h1>
          <ul>
            {links.map((link, index) => (
              <li key={index}
               className="text-gray-400 mb-2 hover:text-white duration-200"
              >
                <Link to={link.url}>
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-1/4">

              <h1 className="text-2xl gradient-text font-semibold">Services</h1>
          <ul>
            {services.map((link, index) => (
              <li key={index}
              className="text-gray-400 mb-2 hover:text-white duration-200"
              >
                <Link
                
                to={link.url}>
                    {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
        <div className="flex flex-col gap-5 w-1/4">
            <h1 className="text-2xl gradient-text font-semibold">Newsletter</h1>
            <input type="email" placeholder="email" className="outline-none border-b-[1px] border-gray-400" />
            <FillButton 
            type="button"
            className="px-20 text-sm rounded font-semibold">
                Subscribe    
            </FillButton>    

        </div>
      </div>
      <div className="border-t-1 border-gray-400 py-8 text-center">
            <h1 className="text-3xl gradient-text">2025 All Rights Reserved - Techable Australia</h1>
      </div>
    </div>
  );
};

export default Footer;
