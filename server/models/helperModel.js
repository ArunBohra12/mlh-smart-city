const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const helperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
    max: [40, "Name must be less than 40 characters"],
    min: [2, "Name must be more than 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter your contact number"],
    trim: true,
  },
  alternatePhoneNumber: {
    type: String,
    required: [true, "Provide an additional contact number"],
  },
  aadhaarCardNumber: {
    type: String,
    required: [true, "You must enter your Aadhar card no.!!"],
  },
  issuesApproved: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Issue",
    },
  ],
  issuesClosed: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Issue",
    },
  ],
  isHelper: {
    type: Boolean,
    default: true,
  },
});

helperSchema.methods.correctPassword = async function (candidatePassword, helperPassword) {
  return await bcrypt.compare(candidatePassword, helperPassword);
};

const Helper = mongoose.model("Helper", helperSchema);

module.exports = Helper;
