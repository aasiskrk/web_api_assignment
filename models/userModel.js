// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
