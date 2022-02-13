const express = require("express");
const app = express();
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const credentials = require("../credentials.json");

app.use(express.json());

initializeApp({
  credential: cert(credentials),
});

const db = getFirestore();

app.listen(3000, () => {
  console.log("We are listening on port 3000");
});
