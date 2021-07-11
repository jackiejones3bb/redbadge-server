require("dotenv").config();
const express = require ('express');
let app = express();
const database = require('./db');
const userController = require('./controllers/users.controller');
const businessController = require('./controllers/business.controller');
const customersController = require('./controllers/customers.controller');
const membershipsController = require('./controllers/memberships.controller');
const programsController = require('./controllers/programs.controller');
const rewardsController = require('./controllers/rewards.controller');

app.use(require("./middleware/headers"));
app.use(express.json());

app.use('/users', userController);
app.use ('/business', businessController);
app.use ('/programs', programsController);
app.use ('/rewards', rewardsController);
app.use ('/customers', customersController);
app.use ('/memberships', membershipsController);

database.sync({alter: true});  //allows alteration of db after creation

app.listen(process.env.PORT, () => {
    console.log(`App is running on port: ${process.env.PORT}`);
  });