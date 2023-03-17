const mongoose = require("mongoose");

const phoneNumberInfoSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  callername: {
    type: String,
  },
  callertype: {
    type: String,
  },
  callertypeid: {
    type: Number,
  },
  prefix: {
    type: Number,
    required: true,
  },
  prefixname: {
    type: String,
  },
  comments: {
    type: Number,
    required: true,
  },
  lastcomment: {
    type: Date,
  },
});

module.exports = mongoose.model("PhoneNumberInfo", phoneNumberInfoSchema);
