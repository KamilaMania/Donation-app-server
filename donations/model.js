const Sequelize = require("sequelize");
const sequelize = require("../db");

const Donation = sequelize.define("donation", {
  Amount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  CampId: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Item.truncate())
  .then(() =>
    Donation.create({})
      .then(donation => {
        console.log(donation.toJSON());
      })
      .catch(error => console.log(error))
  );

module.exports = Donation;
