const router = require("express").Router();
const userRoutes = require("./userRoutes");
const customerRoutes = require("./customerRoutes");
const appointmentRoutes = require("./appointmentRoutes");
const addApptRoutes = require("./addApptRoutes");
// const projectRoutes = require('./projectRoutes');

router.use("/users", userRoutes);
router.use("/customers", customerRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/addAppt", addApptRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
