const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const app = express();
const port = 3001;

app.post("/api/create-checkout-session", async function (req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "setup",
    success_url: process.env.SUCCESS_URL + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.CANCEL_URL,
  });
  console.log(session.url);
  res.send(session.url).status(200);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
