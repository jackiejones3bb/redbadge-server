const sequelize = require('sequelize');
const db = require('../db');


const LoyaltyProgram = db.define('loyalty_program', {
    name: sequelize.STRING,
    numOfPunches: sequelize.INTEGER,
    rewardType: sequelize.STRING,
})


module.exports = LoyaltyProgram;