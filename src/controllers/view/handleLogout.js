const handleLogout = (req, res) => {
  req.session.isLoggedIn = false;
  res.redirect("/");
};

module.exports = handleLogout;
