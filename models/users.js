const Businesss = require('./business');
const Customer = require('./customer');

const sequelize = require('sequelize');
const db = require('../db');


const User = db.define('user', {
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: sequelize.STRING,
        allowNull: true
    },
    lastName: sequelize.STRING,
    role: sequelize.STRING    
})


// one-to-one association of user to business
User.hasOne(Businesss);
Businesss.belongsTo(User);

User.hasOne(Customer);
Customer.belongsTo(User);

module.exports = User;