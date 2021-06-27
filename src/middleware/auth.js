const auth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    // if user tries to access protected route without being logged in redirect to the login page
    res.redirect("/login");
  }
};

module.exports = auth;
