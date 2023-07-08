import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Preguntas más frecuentes</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4 ">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Cuál es nuestra política de devolución?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500 text-justify">
              Si no está satisfecho con su compra, aceptamos devoluciones dentro de los 30 días 
              posteriores a la entrega o su uso. La devolucion del producto consta del cambio 
              por otro y en caso de haberse abonado por tarjeta de crédito o débito será la 
              diferencia después de impuestos. 
              <br></br>
              Para iniciar una devolución, envíenos un mensaje al chat para ser mas rápida y precisa 
              la respuesta, debe ser con su número de pedido y informando si hubo un error o problema 
              con el servicio o producto.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(3)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Cómo hago un seguimiento de mi pedido?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-500 text-justify">
              Puede realizar un seguimiento de su pedido haciendo clic 
              en el enlace de seguimiento en su correo electrónico de 
              confirmación de envío o iniciando sesión en su cuenta en 
              nuestro sitio web y viendo los detalles del pedido.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Cómo me pongo en contacto con el servicio de atención al cliente?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500 text-justify">
              Puede comunicarse con nuestro equipo de atención al cliente 
              enviándonos un mensaje en el chat de la pagina, un correo 
              electrónico a thmfreedom@gmail.com, o escribiendo al (+54) 
              11 6262-4937 entre las 10 hs. y las 17hs. de lunes a viernes.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Puedo cambiar o cancelar mi pedido?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500 text-justify">
              Una vez que se haya realizado un pedido, SOLO EN CASO de realizar el pago, 
              no podemos realizar cambios ni cancelaciones. Si ya no desea 
              los artículos que ordenó, puede devolverlos para obtener un 
              reembolso dentro de los 30 días posteriores a la entrega siguiendo las políticas de reembolso.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Qué métodos de pago aceptan?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
              Aceptamos tarjetas visa, mastercard, método de pago Mercado Pago, efectivo, transferencia, crytomonedas.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              ¿Cómo evaluamos y evitamos las estafas? Términos y condiciones por parte de THM Freedom.
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500 text-justify">
              Para clientes: 
              <br></br>
              THM Freedom verifica si tienen local, depósito o lugar físico para ofrecer su atención 
              al público. Ademas de dar su servicio debe atender situaciones de reembolsos y cambios 
              de productos o servicios. 
              <br></br>
              En casos de que el vendedor no tenga lugar físico estará expreso y debe aceptar que:
              <br></br>
              El pago debe ser después de revisar al menos la presencia del producto. En caso de ser 
              artículos electrodomésticos o dispositivos de teconología deberá probar las conidiciones 
              de todas sus funciones con sus aclaraciones en ocación de presentar detalles estéticos como
              de su Hardware y Software.  
              <br></br>
              <br></br>
              Para vendedores:
              <br></br>
              Para evitar estafas no se debe aceptar señas, pagos previos 
              e imparciales para el uso de el producto o servicio que ofrece. 
              <br></br>
              <br></br>
              Se evita otorgar créditos personales. No poseé la estructura jurídica y física para dar y 
              cobrar por este método de pago. En casos de insolvencia de parte del cliente, confirma una 
              pérdida de un producto y su capital. Para este caso el pago debe ser por tarjetas de 
              crédito con fondos de un Banco. En el cual el cliente debe pagar, el plan de cuotas elegido, 
              a su Banco mientras el vendedor ya dispone de todo el importe en su cuenta. 
              <br></br>
              <br></br>
              No se debe aceptar que lo retiren terceros sin ser identificados 
              por el titular de la compra. Se puede solicitar DNI para confirmar 
              el mismo junto a su nombre.
              <br></br>
              En casos de que el vendedor no tenga lugar físico estará expreso y debe aceptar que:
              <br></br>
              Debe ser en forma presencial la entrega y el cobro por el producto. Bajo ningún concepto 
              puede pedir señas o pagos previos.   
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
