const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
  name: {type: String,
          required: true},
  description: {type: String,
            required: true},
});

const Jobs = mongoose.model('Jobs', jobsSchema);

module.exports = Jobs;