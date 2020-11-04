const getUserId = require("../../utils/getUserID.js");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const updateArticle = async (req, res) => {
  try {
    // 삭제를 수행하는 유저 get
    const userID = getUserId(req);
    // articles에서 삭제할 아이템 데이터 가져오기
    const itemToUpdate = await prisma.articles.findOne({
      where: { id: Number(req.params.id) },
    });
    // body에서 받은 수정할 정보
    const { title, body } = req.body;

    if (userID === itemToUpdate.user_id) {
      const article = await prisma.articles.update({
        where: { id: itemToUpdate.id },
        data: {
          title: title,
          body: body,
        },
      });
      res.status(200).json("수정이 완료되었습니다");
    } else {
      res.json("삭제할 권한이 없습니다");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = updateArticle;
