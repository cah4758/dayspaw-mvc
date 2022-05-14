const router = require("express").Router();
const Appointment = require("../../models/Appointment");
const Customer = require("../../models/Customer");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const allCustomers = await Customer.findAll();

    const customers = allCustomers.map((customer) =>
      customer.get({ plain: true })
    );

    res.render("addAppt", {
      customers,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error(error);
  }
});

router.put("/:appointment_time", withAuth, async (req, res) => {
  // Calls the update method on the Appointment model
  try {
    const updateAppointment = await Appointment.update(
      {
        // All the fields you can update and the data attached to the request body.
        appointment_time: req.body.appointment_time,
        customer_id: req.body.customer_id,
      },
      {
        // Gets the appointment time based on the time given in the request parameters
        where: {
          appointment_time: req.params.appointment_time,
        },
      }
    );

    return res.status(200);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
