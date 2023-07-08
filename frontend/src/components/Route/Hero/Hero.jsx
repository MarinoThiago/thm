import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={` min-h-[65vh] bg-[length:700px_500px] 800px:min-h-[55vh] w-full bg-no-repeat bg-center  ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.questionpro.com/blog/wp-content/uploads/2019/03/928-Tipos-de-servicio-al-cliente.jpg)",
      }}
    >
      <div className={`${styles.section} flex flex-col  max-w-2xl items-center mt-11 w-[55%] 800px:w-[90%]`}>
        <h1
          className={`text-[32px] leading-[1.2] 800px:text-[50px] text-[#3321c8] font-[600] capitalize`}
        >
          MEJORÁ LA  <br /> CALIDAD DE <br />  TU SERVICIO
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba] invisible 800px:visible">
          Pedí ya por tu página WEB <br /> para vender por internet 
        </p>
        <Link to="/products" className="inline-block ">
            <div className={`${styles.button} mt-10`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    PLANES
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
