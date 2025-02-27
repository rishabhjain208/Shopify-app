const express = require("express");
const router = express.Router();
const Shopify = require("shopify-api-node");

router.get("/auth", (req, res) => {
  const shop = req.query.shop;
  if (!shop) return res.status(400).send("Missing shop parameter");

  const authUrl = `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=read_products,write_products&redirect_uri=${process.env.REDIRECT_URI}`;

  res.redirect(authUrl);
});

module.exports = router;
