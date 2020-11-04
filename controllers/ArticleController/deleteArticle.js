const getUserId = require("../../utils/getUserID.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const deleteArticle = async (req, res) => {
  try {
    // 삭제를 수행하는 유저 get
    const userID = getUserId(req);
    // articles에서 삭제할 아이템 데이터 가져오기
    const itemToDelete = await prisma.articles.findOne({
      where: { id: Number(req.params.id) },
    });
    if (userID === itemToDelete.user_id) {
      const article = await prisma.articles.delete({
        where: { id: itemToDelete.id },
      });
      if (article) res.status(200).json("게시글 삭제가 완료되었습니다.");
      else {
        res.status(404).json("게시글이 존재하지 않습니다.");
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = deleteArticle;
