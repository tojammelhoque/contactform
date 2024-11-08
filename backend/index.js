require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./Connection/connection");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect to the database
connect();

// Routes
app.use("/api/contact", contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
