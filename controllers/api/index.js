const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const projectRoutes = require('./projectRoutes');

router.use("/users", userRoutes);
// router.use('/projects', projectRoutes);


router.post("/", async (req, res) => {
     try {
       const userData = await User.create(req.body);
   
       req.session.save(() => {
         req.session.user_id = userData.id;
         req.session.logged_in = true;
   
         res.status(200).json(userData);
       });
     } catch (err) {
       res.status(400).json(err);
     }
   });

router.post("/logout", (req, res) => {
     try {
       req.session.destroy(() => {
         res.status(204).end();
         res.location('/login')
       })
     } 
     catch (error){throw "router.post route failed =(" + error}
     finally {res.location('/login')}})

module.exports = router;
