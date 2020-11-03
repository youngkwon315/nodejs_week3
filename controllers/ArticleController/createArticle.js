const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createArticle = async (req, res) => {
  try {
    const { title, body } = req.body;
    const createdArticle = await prisma.articles.create({
      data: {
        title,
        body,
        users: { connect: { id: 1 } },
      },
    });
    console.log(createdArticle);
    res.status(200).json(createdArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = createArticle;
