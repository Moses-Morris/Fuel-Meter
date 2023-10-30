const express = require("express");
const bodyParser = require("body-parser");
const fuelRoutes = require("./routes/fuel");
const mongoose = require("./db");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve the React build folder as static files
app.use(express.static(path.join("./fuel-meter-frontend", "build")));

app.use("/fuel", fuelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
