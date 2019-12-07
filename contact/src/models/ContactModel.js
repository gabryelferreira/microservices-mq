const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const Contact = new Schema({
  name: String,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});

Contact.pre("save", (next) => {
    next();
})

module.exports = mongoose.model("contact", Contact);