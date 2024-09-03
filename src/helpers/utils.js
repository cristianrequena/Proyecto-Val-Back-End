const jwt = require("jsonwebtoken");
const dayjs = require("dayjs")

const generateToken = (user) => {
  const payload = {
    user_id: user.user_id,
    exp: dayjs().add(30, 'day').unix()
  };

  const secret = process.env.SECRET_KEY;

  return jwt.sign(payload, secret);
};

module.exports = {
  generateToken,
};