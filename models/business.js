const LoyaltyProgram = require('./loyaltyProgram');

const sequelize = require('sequelize');
const db = require('../db');


const Business = db.define('business', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    street: sequelize.STRING,
    city: sequelize.STRING,
    state: sequelize.STRING,
    zip: sequelize.STRING    
})

Business.hasOne(LoyaltyProgram);
LoyaltyProgram.belongsTo(Business);

module.exports = Business;