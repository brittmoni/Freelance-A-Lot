const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
})

const EmpProfile = mongoose.model('EmpProfile', empProfileSchema);

module.exports = EmpProfile;