const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const listingRoutes = require("./routes/listingRoutes");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Router Middleware
app.use("/user", userRoutes);
app.use("/listings", listingRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});