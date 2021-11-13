const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");

// Stores session data
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  helpers
});
// Setting up sessions with cookies into the database
const sess = {
  secret: "Secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  maxAge: Date.now() + 6
};
// Starts the session
app.use(session(sess));


app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname + '/public')));
app.use(routes);

sequelize.sync({
  force: false
}).then(() => {
  app.listen(PORT, () => console.log("🐶  Now listening *WOOF* 🐶"));
});

module.exports = PORT;