const express = require("express");
const googleAuth = require("./Utility/googleAuth.js");
const { handleGetTimeslots } = require("./routes/timeslots");
const { handleBookTimeslot } = require("./routes/book");

const app = express();

// Get the OAuth2 client for making Google Calendar API requests.
googleAuth.initAuthorize((auth) => (this.auth = auth));

// Routes
app.get("/api/timeslots", (req, res) =>
  handleGetTimeslots(req, res, this.auth)
);
app.post("/api/book", (req, res) => handleBookTimeslot(req, res, this.auth));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
