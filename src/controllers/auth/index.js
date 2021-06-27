const { User } = require("../../models");

// function to handle login requests
const login = async (req, res) => {
  try {
    // get the email and password values from the request body
    const { email, password } = req.body;

    // find the user with the email address
    const user = await User.findOne({ where: { email } });

    // error handler if no user found
    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "Failed to login" });
    }

    // use the isValidPassword method on the model to validate if inputted password matches password in database
    const validPassword = await user.isValidPassword(password);

    // error handler if password isn't valid
    if (!validPassword) {
      console.log("Invalid password");
      return res.status(404).json({ error: "Failed to login" });
    }

    // save user details into session
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

// function to handle signup requests
const signup = async (req, res) => {
  try {
    // get values from the request body
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    // submit a sequlize create request on the User table
    const user = await User.create({
      username: username,
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    });

    // error handling if required parameters are missing
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
