const express = require("express");
const bodyParser = require("body-parser");
const fuelRoutes = require("./routes/fuel");
const mongoose = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/fuel", fuelRoutes);

app.listen(port, () => {
  onsole.log(`Server is running on port ${port}`);
});
