const express = require("express");
const router = express.Router();

const ArticleController = require("../../controllers/index");

router.get("/:id", ArticleController.readArticle);
router.post("/", ArticleController.createArticle);
router.patch("/:id", ArticleController.updateArticle);
router.delete("/:id", ArticleController.deleteArticle);

module.exports = router;
