const router = require("express").Router();
const PORT = require("../server");
const { User } = require("../models");
const withAuth = require("../utils/auth");
// const headersFilter = require('../utils/middleware/headers');
// redirects to the login page
router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/appointments");
    return;
  }
  res.redirect("/login");
});

router.get("/addAppt", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/addAppt");
    return;
  }
  res.redirect("/login");
});

router.get("/appointments", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/appointments");
    return;
  }
  res.redirect("/login");
});

router.get("/addAppt", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/addAppt");
    return;
  }
  res.redirect("/login");
});

router.get("/customers", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/api/customers");
    return;
  }
  res.redirect("/login");
});

// employee login
router.get("/login", async (req, res) => {
  // If the user is already logged in, redirect the request to next page
  if (req.session.logged_in) {
    res.redirect("/api/appointments");
    return;
  }
  res.render("login");
});

// post request for "/logout" route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
