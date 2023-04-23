const Notification = require("../models/notificationModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllNotifications = catchAsync(async (req, res) => {
  const notifications = await Notification.find();

  res.status(200).json({
    status: "success",
    notifications,
  });
});

exports.protectNotification = catchAsync(async (req, res, next) => {
  const helperId = req.helper.id;

  if (helperId) {
    return next();
  }

  next(new AppError("Not authorized to access this part of the application", 403));
});

exports.createNotification = catchAsync(async (req, res, next) => {
  const helperId = req.helper.id;
  const { message } = req.body;

  if (!message) {
    return next(new AppError("Message is required"));
  }

  const newNotification = await Notification.create({
    notifiedBy: helperId,
    message,
  });

  if (!newNotification) {
    return next(new AppError("Can't create notification", 500));
  }

  res.status(200).json({
    status: "success",
    newNotification,
  });
});
