const express = require("express");
const authRouter = require("./authRoutes");
const userRouter = require("./userRoutes");
const issueRouter = require("./issueRoutes");
const notificationRouter = require("./notificationRoutes");
const adminRouter = require("./adminRoutes");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/issue", issueRouter);
router.use("/notification", notificationRouter);
router.use("/admin", adminRouter);

module.exports = router;
