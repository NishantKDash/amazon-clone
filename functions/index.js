const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L91APSHx0uTKzhOaU0ijc7tMeVtFJhYnfYkjcbH4Xc5zUysy8AiiUcfeKvCEmYJf7ohzRyyOPFDTE4CktFtr9Er00eFJwZqOG"
);

//API
//-App Config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app);

//Example  endpoint
//http://localhost:5001/clone-bda87/us-central1/api
