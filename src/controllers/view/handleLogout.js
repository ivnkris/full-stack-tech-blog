const handleLogout = (req, res) => {
  // change isLoggedIn value in session
  req.session.isLoggedIn = false;
  // redirect to homepage
  res.redirect("/");
};

module.exports = handleLogout;
