const Sequelize = require("sequelize");
const sequelize = require("../db");

const Item = sequelize.define("item", {
  Name: {
    type: Sequelize.STRING(500),
    allowNull: false
  },
  Price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => Item.truncate())
  .then(() =>
    Item.create({
      Name: "Flour",
      Price: "1.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Water",
      Price: "0.50"
    })
  )
  .then(() =>
    Item.create({
      Name: "Sugar",
      Price: "0.60"
    })
  )
  .then(() =>
    Item.create({
      Name: "Oil",
      Price: "1.50"
    })
  )
  .then(() =>
    Item.create({
      Name: "Tea",
      Price: "1.30"
    })
  )
  .then(() =>
    Item.create({
      Name: "Coffee",
      Price: "1.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Milk",
      Price: "2.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Onions and garlic",
      Price: "2.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Salt, pepper, spices, tomato sauce and paste, lemon juice",
      Price: "3.00"
    })
  )

  .then(() =>
    Item.create({
      Name: "Candles",
      Price: "0.30"
    })
  )
  .then(() =>
    Item.create({
      Name: "Matches & Lighters",
      Price: "0.90"
    })
  )
  .then(() =>
    Item.create({
      Name: "Duct tape",
      Price: "2.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Camping gas",
      Price: "5.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Gas stove",
      Price: "7.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Pan, pot, grill",
      Price: "10.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Anti-bacterial product",
      Price: "4.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Cleaning products",
      Price: "3.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Basic first aid kits",
      Price: "3.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Wet wipes",
      Price: "1.00"
    })
  )
  .then(() =>
    Item.create({
      Name:
        "Basic toiletry products (soap, shampoo, shower gel, deodorant, towels, kitchen paper, toilet paper, tissues, razors, shaving products, sanitary towels…)",
      Price: "15.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Camp bed",
      Price: "20.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Blanket",
      Price: "10.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Pillow",
      Price: "5.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Tent",
      Price: "25.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Roll mat",
      Price: "6.00"
    })
  )
  .then(() =>
    Item.create({
      Name: "Notebook",
      Price: ".20"
    })
  )
  .then(() =>
    Item.create({
      Name: "Pencils & Pens",
      Price: "2.00"
    })
  )

  .then(item => {
    console.log(item.toJSON());
  })
  .catch(error => console.log(error));

module.exports = Item;
