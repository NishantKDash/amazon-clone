const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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
app.get("/", (res, res) => res.status(200).send("Hello World"));
//listen command
exports.api = functions.https.onRequest(app);
