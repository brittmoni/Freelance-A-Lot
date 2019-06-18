const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilesSchema = new Schema({
  name: {type: String,
          required: true},
  biography: {type: String,
            required: true},
  languages: {type: String,
              required: true},
  portfolio: {type: String,
              required: true}
});

const Profile = mongoose.model('Profile', profilesSchema);

module.exports = Profile;