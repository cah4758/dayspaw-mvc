const router = require("express").Router();
const Customer = require("../../models/Customer");
const withAuth = require('../../utils/auth')

// GET all customers
router.get("/", withAuth, async (req, res) => {
  // Get all customers from the customer table
  try{
    const allCustomers = await Customer.findAll()
    res.render('homepage');
    const customers = allCustomers.map((customer) =>
      customer.get({ plain: true })
    );

    res.render("customers", {
      customers,
    });
  return res.json(allCustomers);
  }
  catch (err) {
    res.json(err + "Error here too, figure it out");
  }
});

router.get('/customers', async (req, res) => {
  res.send('testing testing')
})
  

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
    const newCustomerData = await Customer.create(req.body);
    res.status(200).json(newCustomerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
