const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const login = async (req, res) => {
  try {
    const { email, password: inputPassword } = req.body;
    const foundUser = await prisma.users.findOne({ where: { email } });

    if (!foundUser) await reject(400);

    const { id, password: hashedPassword } = foundUser;
    const isValidPassword = await bcrypt.compare(inputPassword, hashedPassword);

    if (!isValidPassword) await reject(400);

    const token = jwt.sign({ id }, "secret_key", {
      expiresIn: "1h",
    });
    // localStorage.setItem("token", token);
    res.status(200).json({ message: "login success", token });
  } catch (err) {
    res.status(400).json({ message: err.message });
    next(err);
  }
};

module.exports = login;
