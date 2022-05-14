const router = require("express").Router();
const Customer = require("../../models/Customer");
const withAuth = require("../../utils/auth");

// GET all customers
router.get("/", withAuth, async (req, res) => {
  // Get all customers from the customer table
  try {
    const allCustomers = await Customer.findAll();
    const customers = allCustomers.map((customer) =>
      customer.get({ plain: true })
    );

    res.render("customers", {
      customers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err + "Error here too, figure it out");
  }
});

// GET a customer
router.get("/:customer_id", async (req, res) => {
  // Get one customer from the customer table
  try {
    const selectCustomers = await Customer.findOne({
      where: {
        customer_id: req.params.customer_id,
      },
    });

    return res.json(selectCustomers);
  } catch (err) {
    res.json(err);
  }
});

// POST new customer
router.post("/", async (req, res) => {
  try {
    const newCustomerData = await Customer.create({
      customer_first_name: req.body.customer_first_name,
      customer_last_name: req.body.customer_last_name,
      customer_phone: req.body.customer_phone,
      customer_email: req.body.customer_email,
      dog_name: req.body.dog_name,
    });
    res.status(200).json({ customer: newCustomerData });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
