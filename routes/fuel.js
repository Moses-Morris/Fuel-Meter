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
// Update fuel entry
router.put('/update/:id', async (req, res) => {
    try {
        const entry = await FuelEntry.findOne({
            where: {
              _id: req.params.id,
            },
          });
          if (entry) {
            // Update the entry with data from req.body
            await entry.update(req.body);         
            return res.status(200).json({message:`Entry has been updated successfully`})
          }
            return res.status(404).json({ message: "Entry not found" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    });

// Delete fuel entry
router.delete('/delete/:id', async (req, res) => {
    try {
        const removedEntry = await FuelEntry.findByIdAndDelete({_id:req.params.id})
          if (removedEntry) {     
            return res.status(204).json({message:`Entry has been deleted successfully`})
          }
        return res.status(404).json({ message: "Entry not found" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
    });

module.exports = router;
