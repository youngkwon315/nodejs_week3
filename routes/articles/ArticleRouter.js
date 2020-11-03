const express = require("express");
const router = express.Router();

const ArticleController = require("../../controllers/index");

router.get("/", ArticleController.readArticle);
router.post("/", ArticleController.createArticle);
router.put("/", ArticleController.updateArticle);
router.delete("/", ArticleController.deleteArticle);

module.exports = router;
