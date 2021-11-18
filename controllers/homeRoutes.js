const router = require("express").Router();
const PORT = require('../server');
const {
  User
} = require("../models");
const withAuth = require("../utils/auth");
// const headersFilter = require('../utils/middleware/headers');
// redirects to the login page
<<<<<<< HEAD
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
=======
router.get("/", async (req, res) => {
  res.redirect("/api/users/login");
});

// // employee login
// router.get("/login", async (req, res) => {
//   // If the user is already logged in, redirect the request to next page
//   if (req.session.logged_in) {
//     res.redirect("/schedules");
//     return;
//   }
//   res.send("login here");
//   // res.render("login");
// });

// // post credentials and submit
// router.post("/login", async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { name: req.body.name } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508
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