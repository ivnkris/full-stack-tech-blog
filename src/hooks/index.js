const bcrypt = require("bcrypt");

const beforeCreate = async (newUser) => {
  newUser.password = await bcrypt.hash(newUser.password, 10);
  return newUser;
};

const beforeBulkCreate = async (newUsers) => {
  const promises = newUsers.map((user) => {
    return bcrypt.hash(user.password, 10);
  });

  const passwords = await Promise.all(promises);

  passwords.forEach((password, index) => {
    newUsers[index].password = password;
  });
};

const hooks = {
  beforeCreate,
  beforeBulkCreate,
};

module.exports = hooks;
