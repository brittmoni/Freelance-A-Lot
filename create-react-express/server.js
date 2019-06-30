const mongoose = require('mongoose');
const router = require('./routes');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');

console.log(PORT);


// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/', router);

app.use(function(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end(JSON.stringify(req.body, null, 2))
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password1@ds345597.mlab.com:45597/heroku_qxhcl7kj', { useNewUrlParser:true })
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
