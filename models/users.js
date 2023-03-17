const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  isSuspend: {
    type: Boolean,
    required: true
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", usersSchema);
