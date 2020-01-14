const Sequelize = require("sequelize");
const sequelize = require("../db");

const Donation = sequelize.define("donation", {
  amount: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  campId: {
    type: Sequelize.INTEGER,
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
