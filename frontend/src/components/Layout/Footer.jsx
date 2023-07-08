import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiTwotonePushpin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import Logo from "../../TH M Freedom sin fondo.png";
import Pasarela from "../Payment/Pasarela.png";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Suscribite</span> para recibir noticias, {" "}
          <br />
          eventos y ofertas.
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={Logo}
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p> Piensa más en grande, think free, think more Freedom</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook
              size={25} 
              className="cursor-pointer" 
            />
            
            <Link to= "https://wa.me/message/UTBJET5N5SBXI1">
            <AiOutlineWhatsApp
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            </Link>
            
            
            <Link to= "https://www.instagram.com/thm_freedom/">
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
              
            />
            </Link>
                    
            <Link to="https://www.google.com/maps/place/Gelly+y+Obes+4980,+B1665GQD+Jos%C3%A9+C.+Paz,+Provincia+de+Buenos+Aires/@-34.5224272,-58.7514407,17z/data=!3m1!4b1!4m5!3m4!1s0x95bc981d79c84a81:0xaa92e3143cc4df44!8m2!3d-34.5224272!4d-58.7514407?entry=ttu">
            <AiTwotonePushpin
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            </Link>
            
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Compañía</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Comercio</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Apoyo</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 THM_Freedom. All rights reserved.</span>
        <Link to= "/faq">
        <span>Términos · Política de privacidad</span>
        </Link>
        
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src={Pasarela}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
