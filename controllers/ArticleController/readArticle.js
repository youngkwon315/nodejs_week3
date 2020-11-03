const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const readArticle = async (req, res) => {
  try {
    const articles = await prisma.articles;
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = readArticle;
