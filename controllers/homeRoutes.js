const router = require("express").Router();
const PORT = require('../server');
const {
  User
} = require("../models");
const withAuth = require("../utils/auth");
// const headersFilter = require('../utils/middleware/headers');
// redirects to the login page
// router.get("/", async (req, res) => {
//   res.redirect("/login");
// });

// employee login
router.get("/login", async (req, res) => {
  // If the user is already logged in, redirect the request to next page
  try {
    if (req.session.logged_in) {
      res.render('homepage');
    } 
    else {
      res.redirect('/login')
    };
  } catch (error) {
    console.error(error);
  }
  res.send("login here");
  // res.render("login");
});

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/clients');
//     return;
//   }
//   res.render('login');
// });

// post request for "/logout" route
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.send("Bye!");
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// display schedule route
router.get("/schedule", withAuth, async (req, res) => {});

module.exports = router;