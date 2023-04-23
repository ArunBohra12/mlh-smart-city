const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const Helper = require("../models/helperModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const { name, email, photo, aadharNumber, phoneNumber, password, passwordConfirm } = req.body;

  if (!name || !email || !aadharNumber || !phoneNumber || !password || !passwordConfirm) {
    return next(new AppError("Please provide all the details", 400));
  }

  const newUser = await User.create({
    name,
    email,
    photo,
    aadharNumber,
    phoneNumber,
    password,
    passwordConfirm,
  });

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const helper = await Helper.findOne({ email });

  if (helper) {
    return createSendToken(helper, 200, res);
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.isPasswordCorrect(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not logged in! Please log in to get access.", 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const helper = await Helper.findById(decoded.id);

  if (helper) {
    req.helper = helper;
    return next();
  }
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError("The user belonging to this token does no longer exist.", 401));
  }

  req.user = currentUser;
  next();
});
