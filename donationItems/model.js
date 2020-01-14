const Sequelize = require("sequelize");
const sequelize = require("../db");

const DonationItem = sequelize.define("donationItem", {
  Amount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  ItemId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  CampId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => DonationItem.truncate())
  .then(() =>
    DonationItem.create({})
      .then(donationItem => {
        console.log(donationItem.toJSON());
      })
      .catch(error => console.log(error))
  );

module.exports = DonationItem;
