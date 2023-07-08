const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
//import { initMercadoPago } from "@mercadopago/sdk-react";


// SDK de Mercado Pago
const mercadopago = require("mercadopago")(process.env.MERCADOPAGO_SECRET_KEY);
// Agrega credenciales

//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    const myPayment = await mercadopago.paymentIntents.create({
      amount: req.body.amount,
      currency: "ars",
      metadata: {
        company: "THM Freedom",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);

router.get(
  "/mercadopagoapikey",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ mercadopagoApikey: process.env.MERCADOPAGO_API_KEY });
  })
);


module.exports = router;