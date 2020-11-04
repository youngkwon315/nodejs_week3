const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const readArticle = async (req, res) => {
  try {
    const idToRead = Number(req.params.id);
    const article = await prisma.articles.findOne({
      where: { id: idToRead },
    });
    if (article) res.status(200).json(article);
    else {
      res.status(404).json("게시글이 존재하지 않습니다");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = readArticle;
