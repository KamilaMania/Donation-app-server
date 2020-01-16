const Sequelize = require("sequelize");
const sequelize = require("../db");

const DonationItem = sequelize.define("donationItem", {
  campId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  package: {
    type: Sequelize.STRING(2000),
    allowNull: false
  },
  totalPrice: {
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
