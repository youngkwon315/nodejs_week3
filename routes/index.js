const express = require("express");
const router = express.Router();

const UserRouter = require("./users/UserRouter");
const ArticleRouter = require("./articles/ArticleRouter");

router.use("/users", UserRouter);
router.use("/articles", ArticleRouter);

module.exports = router;
