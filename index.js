const express = require("express");
const next = require("next");
const googleAuth = require("./Utility/googleAuth.js");
const { handleGetTimeslots } = require("./routes/timeslots");
const { handleBookTimeslot } = require("./routes/book");
const { handleGetDays } = require("./routes/days");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Get the OAuth2 client for making Google Calendar API requests.
googleAuth.initAuthorize((auth) => (this.auth = auth));

app.prepare().then(() => {
  const server = express();

  // Routes
  server.get("/api/timeslots", (req, res) =>
    handleGetTimeslots(req, res, this.auth)
  );
  server.get("/api/days", (req, res) => handleGetDays(req, res, this.auth));
  server.post("/api/book", (req, res) =>
    handleBookTimeslot(req, res, this.auth)
  );

  // Pages
  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${port}`);
  });
});
