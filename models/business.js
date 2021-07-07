const LoyaltyProgram = require('./loyaltyProgram');

const sequelize = require('sequelize');
const db = require('../db');


const Businesss = db.define('business', {
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    street: sequelize.STRING,
    city: sequelize.STRING,
    state: sequelize.STRING,
    zip: sequelize.STRING    
})

Businesss.hasOne(LoyaltyProgram);
LoyaltyProgram.belongsTo(Businesss);

module.exports = Businesss;