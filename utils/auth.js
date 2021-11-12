const withAuth = (req, res, next) => {
  // Send user back to login if unsucessful
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
