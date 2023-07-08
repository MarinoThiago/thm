import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import {
  RiDashboard3Line,
  RiEarthLine,
  RiArrowDownSLine,
  RiMessage3Line,
  RiCalendar2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiArrowUpSLine,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSlackLine,
  RiCheckLine,
  RiFilter2Line,
  RiSearchEyeLine,
} from "react-icons/ri";
import {AiOutlineDingding} from "react-icons/ai";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>



      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center  cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <img
                    src={i.image_Url}
                    className="w-[90px] object-cover"
                    alt=""
                  />
                  <h5 className={`text-[18px] leading-[1.3] ml-[5px]`}>{i.title}</h5>
                  
                </div>
              );
            })}
        </div>
      </div>


                                                            {/*__________ Main content _____________*/}
        <div className="pt-18 m-10 ">
          <h1 className="text-4xl text-gray-300 my-10">Plan & Precios</h1>
          {/* Plans */}
          
          <div className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 800px:justify-items-center">
            
            {/* Card */}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10 800px:max-w-md">
              <div className="flex flex-col items-center mb-20">
                <RiSlackLine className="text-7xl my-6 p-4 bg-gray-200 rounded-full text-yellow-500" />
                <h2 className="text-2xl uppercase tracking-[8px]">Junior</h2>
                <p className="text-gray-500 mb-4">Emprendimiento</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  Free
                </h5>
                <p className="text-gray-500 mb-8">$950 por mes</p>
                <Link to="https://wa.me/message/UTBJET5N5SBXI1">
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                Consultar plan
                </button>
                </Link>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Logo y página personalizada
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Sistema para publicar productos
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Botón de WhatsApp para clientes
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Carrito de compras 
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Creacion de usuarios para clientes
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Lista de productos favoritos
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Promos y cupones para clientes
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Eventos y subastas contrareloj
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Cobros con tarjeta de crédito
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Dominio personalizado incluido
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Certificado de RED segura
                </li>
              </ul>
            </div>
            {/* Card */}
            <div className="bg-[#3321c8] p-8 lg:p-12 rounded-xl mb-10 800px:max-w-md">
              <div className="flex flex-col items-center mb-20">
                <RiSearchEyeLine className="text-7xl my-6 p-4 bg-gray-200 rounded-full text-yellow-500" />
                <h2 className="text-2xl uppercase tracking-[8px] text-white">
                  PYME
                </h2>
                <p className="text-gray-300 mb-4">Pequeña y Mediana Empresa</p>
                <h5 className="text-2xl uppercase tracking-[4px] font-bold text-white">
                  $4.499
                </h5>
                <p className="text-gray-300 mb-8">$1.450 por mes</p>
                <Link to="https://wa.me/message/UTBJET5N5SBXI1">
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                Consultar plan
                </button>
                </Link>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-100">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Logo y página personalizada
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Sistema para publicar productos
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Botón de WhatsApp para clientes            
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Carrito de compras
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Creacion de usuarios para clientes
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lista de productos favoritos
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Promos y cupones para clientes
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Eventos y subastas contrareloj
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Cobros con tarjeta de crédito
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Dominio personalizado incluido
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Certificado de RED segura
                </li>
              </ul>
            </div>
            {/* Card */}
            <div className="bg-[#1E1F24] p-8 lg:p-12 rounded-xl mb-10 800px:max-w-md">
              <div className="flex flex-col items-center mb-20">
                <AiOutlineDingding className="text-7xl my-6 p-4 bg-gray-200 rounded-full text-yellow-500" />
                <h2 className="text-2xl uppercase tracking-[8px]">
                  MERCURIO
                </h2>
                <p className="text-gray-500 mb-4">(PRÓXIMAMENTE) tarjetas de crédito</p>              
                <h5 className="text-2xl uppercase tracking-[4px] font-bold">
                  $12.499
                </h5>
                <p className="text-gray-500 mb-8">$2.499 por mes</p>
                <Link to="https://wa.me/message/UTBJET5N5SBXI1">
                <button className="bg-[#141517] py-2 px-8 rounded-lg hover:text-white transition-colors">
                Consultar plan
                </button>
                </Link>
                
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Logo y página personalizada
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Sistema para publicar productos
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Botón de WhatsApp para clientes
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Carro de compras
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Creacion de usuarios para clientes
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Lista de productos favoritos
                </li>               
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Promos y cupones para clientes
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Eventos y subastas contrareloj
                </li>
                <li className="flex items-center gap-4 opacity-[.3]">
                  <RiCloseLine className="text-red-500 text-2xl" /> Cobros con tarjeta de crédito (PRÓXIMAMENTE)
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Dominio personalizado incluido
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Certificado de RED segura
                </li>
              </ul>
            </div>
          </div>
        </div>

    </>
  );
};

export default Categories;
