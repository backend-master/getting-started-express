const express = require("express"); // Import express library
const app = express(); // Initialize app as express application
const PORT = 3000; // define port to running express app

// Tell to express to listen for a GET request using ".get()" method
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World !"
  });
});

// Set express app to listen at PORT:3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
