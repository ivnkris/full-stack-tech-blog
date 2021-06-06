const bcrypt = require("bcrypt");

const beforeCreate = async (newUser) => {
  newUser.password = await bcrypt.hash(newUser.password, 10);
  return newUser;
};

const hooks = {
  beforeCreate,
};

module.exports = hooks;
