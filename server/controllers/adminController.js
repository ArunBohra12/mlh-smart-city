const HelperDraft = require("../models/helperDraft");
const Helper = require("../models/helperModel");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createHelper = catchAsync(async (req, res, next) => {
  const { draftID } = req.body;

  const helperDraft = await HelperDraft.findById(draftID);

  if (!helperDraft) {
    return next(new AppError("Couldnt find the helperDraft"));
  }

  const userId = helperDraft.user;

  const user = await User.findById(userId);

  if (!user) {
    return next(new AppError("Couldnt find the user"));
  }

  const newHelper = await Helper.create({
    name: user.name,
    email: user.email,
    photo: user.photo,
    password: user.password,
    phoneNumber: user.phoneNumber,
    alternatePhoneNumber: helperDraft.alternatePhoneNumber,
    aadharNumber: user.aadharNumber,
  });

  if (!newHelper) {
    return next(new AppError("Couldnt create the helper"));
  }

  await User.findByIdAndDelete(userId);

  res.status(200).json({
    status: "success",
    helper: newHelper,
  });
});
