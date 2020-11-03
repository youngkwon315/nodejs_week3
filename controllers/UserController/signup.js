const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const signup = async (req, res) => {
  try {
    // 2
    const { email, password } = req.body; // 3

    const hashedPassword = await bcrypt.hash(password, 10); // 4

    const createdUser = await prisma.users.create({
      // 5
      data: {
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      // 6
      user: {
        id: createdUser.id,
        email: createdUser.email,
      },
    });
  } catch (err) {
    // 2
    res.status(500).json({ message: err.message }); // 7
    next(err);
  }
};

module.exports = signup;
