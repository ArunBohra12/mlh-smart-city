const express = require("express");
const authRouter = require("./authRoutes");
const userRouter = require("./userRoutes");
const issueRouter = require("./issueRoutes");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/issue", issueRouter);

module.exports = router;
