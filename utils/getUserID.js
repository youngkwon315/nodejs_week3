const jwt = require("jsonwebtoken");

const getUserId = (req) => {
  const authorization = req.headers.authorization;
  if (!authorization) throw new Error("authorization is needed");
  else {
    const token = authorization.replace("Bearer", "");
    const user = jwt.verify(token, "secret_key");

    return user.id;
  }
};

module.exports = getUserId;
