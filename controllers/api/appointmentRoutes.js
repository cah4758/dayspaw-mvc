const router = require("express").Router();
const { Appointment, Customer } = require("../../models");
const withAuth = require("../../utils/auth");

const nodemailer = require("nodemailer");

// GET all appointments
router.get("/", withAuth, async (req, res) => {
  // Get all appointments from the appointments table
  try {
    const allAppointments = await Appointment.findAll({
      include: {
        model: Customer,
        attributes: [
          "dog_name",
          "customer_first_name",
          "customer_last_name",
          "customer_id",
        ],
      },
    });

    const appointments = allAppointments.map((appointment) =>
      appointment.get({ plain: true })
    );

    res.render("appointments", {
      appointments,
    });
  } catch (err) {
    res.json(err + " That ain't it, chief");
  }
});

// GET a appointment
router.get("/:appointment_time", withAuth, async (req, res) => {
  // Get one appointment from the appointment table
  try {
    const selectAppointment = await Appointment.findOne({
      where: {
        appointment_time: req.params.appointment_time,
      },
    });

    return res.json(selectAppointment);
  } catch (err) {
    res.json(err);
  }
});

// Updates appointment based on its droptime
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

    return res.json(updateAppointment);
  } catch (err) {
    res.json(err);
  }
});

router.post("/:customer_id", withAuth, async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dayspaww@gmail.com",
      pass: "Project2!",
    },
  });

  const notify = await Customer.findOne({
    where: {
      customer_id: req.params.customer_id
    }
  })
  
  console.log(notify);

  try{
    await transporter.sendMail({

    from: '"DaySpaw 🐾" <dayspaww@gmail.com>',
    to: `${notify[0].customer_email}, ${notify[0].customer_email}`,
    subject: `${notify[0].dog_name} is ready to be picked up!`,
    text: "Please come see us at 123 Main Street to pick up your furry friend!",
    html: `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DaySpaw 🐾</title>
    </head>
      <body>
        <p>Please come see us at 123 Main Street to pick up your furry friend!</p>
        
        <p>Our hours of operation are 9AM to 5PM</p>
      </body>
    </html>
    
    `,
  });
  return res.json(notify);

  }
  catch(err) {
    res.json(err);
  }
});

module.exports = router;
