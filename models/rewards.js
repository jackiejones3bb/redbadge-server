const sequelize = require('sequelize');
const db = require('../db');


const Rewards = db.define('rewards', {
    punchDate: sequelize.DATE,
    redeemed: sequelize.BOOLEAN,
    redeemedDate: sequelize.DATE,

})


module.exports = Rewards;