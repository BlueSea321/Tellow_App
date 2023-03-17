const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
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
    required: true,
  },
  callertype: {
    type: String,
    required: true,
  },
  callertypeid: {
    type: Number,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
