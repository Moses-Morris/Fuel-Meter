const express = require("express");
const router = express.Router();
const FuelEntry = require("../models/fuel");
const request = require("request");

const mpesaQueryEndpoint =
  "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query";

// Endpoint to initiate M-Pesa payment
router.post("/mpesa/payment", async (req, res) => {
  try {
    // Use the Safaricom API to initiate a payment request
    // Send request to Safaricom's endpoint
    // Handle the response from Safaricom

    // Once the payment is initiated, return a response to the user
    res.status(200).json({ message: "Payment request initiated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to receive payment status callback
router.post("/mpesa/callback", async (req, res) => {
  try {
    // Safaricom will send payment status updates to this endpoint
    // Verify and process the payment status information from Safaricom
    // Update your database with the payment status

    // Return a response to Safaricom to acknowledge receipt of the callback
    res.status(200).send("Callback received");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const entries = await FuelEntry.find();
    res.status(200).json(entries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const entry = new FuelEntry(req.body);
    const savedEntry = await entry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEntry = await FuelEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEntry) {
      return res.status(404).json({ error: "Fuel entry not found" });
    }
    res.status(200).json(updatedEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedEntry = await FuelEntry.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ error: "Fuel entry not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
