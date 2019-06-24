const mongoose = require('mongoose');
const router = require('./routes');
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

app.use(router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/freelance-a-lot', { useNewUrlParser:true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
