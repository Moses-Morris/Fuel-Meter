const express = require("express");
const router = express.Router();
const FuelEntry = require("../models/fuel");

router.get("/fuel", async (req, res) => {
  try {
    const entries = await FuelEntry.find();
    res.json(entries);
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

router.put("/fuel/:id", async (req, res) => {
  try {
    const updatedEntry = await FuelEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEntry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/fuel/:id", async (req, res) => {
  try {
    await FuelEntry.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
