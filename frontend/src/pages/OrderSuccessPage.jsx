import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiTwotonePushpin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
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

const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-18 m-10 800px:justify-items-center">
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
          ¡Su pedido se ha realizado con éxito! 
      </h5>
      <br />

      <div className="bg-[#3321c8] p-8 lg:p-12 rounded-xl mb-4 800px:max-w-md ">
              <div className="flex flex-col items-center mb-10">
                <RiFilter2Line className="text-7xl my-6 p-4 bg-purple-200 rounded-full text-purple-600" />
                <h2 className="text-2xl text-white uppercase tracking-[8px]">
                  PARA TENER EL PRODUCTO
                </h2>
                <p className="text-gray-400 mb-4">¡Dale que ya lo tenes!</p>
                <p className="text-gray-300 mb-8">Tenes 12hs. para pagar por tu pedido</p>
                <Link to="https://wa.me/message/UTBJET5N5SBXI1"
                className="bg-[#25D366] flex W-16 py-2 px-5 rounded-lg text-white  transition-colors">
                    <AiOutlineWhatsApp
                      size={27}
                      style={{ marginRight: "5px", cursor: "pointer" }}
                    />
                   WhatsApp
                </Link>
              </div>
              {/* Futures */}
              <ul className="flex flex-col gap-4 text-gray-400">
                <li className="flex items-center gap-4">
                 Envianos mensaje por WhatsApp:
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Si vas a abonar en efectivo 
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Verifica los datos si pagas por CBU 
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Si es por CBU, compartir el comprobante 
                </li>
                <li className="flex items-center gap-4">
                  <RiCheckLine className="text-green-500 text-2xl" /> Una vez llegado el importe podes retirarlo
                </li>
                
              </ul>
            </div>


      <br />
    </div>
  );
};

export default OrderSuccessPage;
