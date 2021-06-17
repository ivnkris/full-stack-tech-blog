const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "Failed to login" });
    }

    const validPassword = await user.isValidPassword(password);

    if (!validPassword) {
      console.log("Invalid password");
      return res.status(404).json({ error: "Failed to login" });
    }

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.email = user.email;
      req.session.firstName = user.first_name;
      req.session.lastName = user.last_name;
      req.session.userId = user.id;

      return res.status(200).json({ data: "Login successful" });
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    const user = await User.create({
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    });
    console.log(user);

    if (!user) {
      console.log("Failed to create user");
      return res.status(500).json({ error: "Failed to signup" });
    }

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to signup" });
  }
};

module.exports = { login, signup };
