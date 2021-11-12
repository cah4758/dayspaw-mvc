const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// redirects to the login page
router.get("/", async (req, res) => {
  res.redirect("/login");
});

// employee login
router.get("/login", async (req, res) => {
  // If the user is already logged in, redirect the request to next page
  try {
    if (req.session.loggedIn) {
    res.redirect('view', { layout: 'main'});
    return;
  }
    else {
  res.render('view', { layout: 'login'})};
  }
  catch(error) {
    console.error(error);
  }
});

// post credentials and submit
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// display schedule route
router.get("/schedule", withAuth, async (req, res) => {});

module.exports = router;
