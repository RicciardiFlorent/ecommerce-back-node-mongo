const router = require("express").Router();
const stripe = require("stripe")("sk_test_51Jg4YnDYl0FIlCROvN5imoAPeQgs0Uj7ZqopeaenV5LKJJjrbry6EAv0wR5PiGp19yFD0vk3wcVuJRI7RpKoDK3o00DvNeb1o4");

router.post("/payment", (req, res) => {
  console.log(process.env.STRIPE_KEY)
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;