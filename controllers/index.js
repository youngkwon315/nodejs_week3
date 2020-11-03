const signup = require("./UserController/signup");
const login = require("./UserController/login");

const readArticle = require("./ArticleController/readArticle");
const createArticle = require("./ArticleController/createArticle");
const updateArticle = require("./ArticleController/updateArticle");
const deleteArticle = require("./ArticleController/deleteArticle");

module.exports = {
  signup,
  login,
  readArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
