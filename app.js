const express = require ('express');
let app = express();
const userController = require('./controllers/users.controller');
const businessController = require('./controllers/business.controller');
const customersController = require('./controllers/customers.controller');
const membershipsController = require('./controllers/memberships.controller');
const programsController = require('./controllers/programs.controller');
const rewardsController = require('./controllers/rewards.controller');

app.use('/users', userController);
app.use ('/business', businessController);
app.use ('/programs', programsController);
app.use ('/rewards', rewardsController);
app.use ('/customers', customersController);
app.use ('/memberships', membershipsController);

app.listen (3000, () => console.log('listening on port 3000'));