const Sequelize = require("sequelize");
const sequelize = require("../db");

const DonationItem = sequelize.define("donationItem", {
  campId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  itemName: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  amount: {
    type: Sequelize.DECIMAL,
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
