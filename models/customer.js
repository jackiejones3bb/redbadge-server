const sequelize = require('sequelize');
const db = require('../db');


const Customer = db.define('customer', {
    street: sequelize.STRING,
    city: sequelize.STRING,
    state: sequelize.STRING,
    zip: sequelize.STRING,
    phone: sequelize.STRING    
})


module.exports = Customer;