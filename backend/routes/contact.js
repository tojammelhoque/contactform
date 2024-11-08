const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
  try {
    const { name, number, email, address, state, city } = req.body;
    const contactData = new Contact({
      name,
      number,
      email,
      address,
      state,
      city,
    });
    const savedContact = await contactData.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
