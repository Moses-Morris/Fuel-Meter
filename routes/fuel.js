const express = require('express');
const router = express.Router();
const FuelEntry = require('../models/fuel');

// GET all fuel entries
router.get('/fuel', async (req, res) => {
try {
    const entries = await FuelEntry.find();
    res.json(entries);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
}
});

// POST a new fuel entry
router.post('/', async (req, res) => {
try {
    const entry = new FuelEntry(req.body);
    const savedEntry = await entry.save();
    res.status(201).json(savedEntry);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
}
});

// Implement PUT and DELETE

module.exports = router;
