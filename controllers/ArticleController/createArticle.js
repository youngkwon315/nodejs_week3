const getUserId = require("../../utils/getUserID.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createArticle = async (req, res) => {
  try {
    const userID = getUserId(req);
    const { title, body } = req.body;
    const createdArticle = await prisma.articles.create({
      data: {
        title,
        body,
        users: { connect: { id: userID } },
      },
    });
    res.status(200).json(createdArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = createArticle;
