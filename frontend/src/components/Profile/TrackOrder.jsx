import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <>
        {data && data?.status === "Procesando" ? (
          <h1 className="text-[20px]">Su pedido se está procesando en la tienda.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Su pedido está en camino para el socio de entrega.
          </h1>
        ) : data?.status === "Envío" ? (
          <h1 className="text-[20px]">
            Su pedido está en camino con nuestro socio de entrega.
          </h1>
        ) : data?.status === "Recibido" ? (
          <h1 className="text-[20px]">
            Tu Pedido está en tu ciudad. Nuestro repartidor lo entregará.
          </h1>
        ) : data?.status === "En camino" ? (
          <h1 className="text-[20px]">
            Nuestro repartidor va a entregar tu pedido.
          </h1>
        ) : data?.status === "Entregado" ? (
          <h1 className="text-[20px]">¡Tu pedido está entregado!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">¡Su reembolso se está procesando!</h1>
        ) : data?.status === "Reembolso exitoso" ? (
          <h1 className="text-[20px]">¡Tu Reembolso es un éxito!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
