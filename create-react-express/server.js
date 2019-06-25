const mongoose = require('mongoose');
const router = require('./routes');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

console.log(PORT);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
// }

app.use('/', router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/freelance-a-lot', { useNewUrlParser:true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log(err));

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
