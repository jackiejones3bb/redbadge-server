const sequelize = require('sequelize');
const db = require('../db');


const LoyaltyProgram = db.define('loyalty_program', {
    name: sequelize.STRING,
    numOfPunches: sequelize.INTEGER,
    rewardType: sequelize.INTEGER,
    rewardAmount: sequelize.INTEGER
})


module.exports = LoyaltyProgram;