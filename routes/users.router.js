const express = require("express");
const Faker = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size ? size : 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: Faker.commerce.productName(),
      price: parseInt(Faker.commerce.price(), 10),
      image: Faker.image.imageUrl(),
      position: index,
    });
  }
  res.json({ limit, users: users });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "producto1",
    price: 1000,
  });
});

module.exports = router;
