const mongoose = require('mongoose');
<<<<<<< HEAD
const routes = require('./routes');
=======
>>>>>>> 1ec3189fc73995c2f63938525b74cd1b73530cee
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

<<<<<<< HEAD
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/freelancedb'
);
=======
mongoose.connect('mongodb://localhost/freelance-a-lot', {useNewUrlParser: true});

>>>>>>> 1ec3189fc73995c2f63938525b74cd1b73530cee
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
