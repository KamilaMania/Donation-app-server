const { Router } = require("express");
const Item = require("./model");
const router = new Router();

router.get("/items", (req, res, next) => {
  const limit = req.query.limit || 100;
  const offset = req.query.offset || 0;
  Item.findAndCountAll({ limit, offset })
    .then(items => res.send({ data: items.rows, total: items.count }))
    .catch(next);
});
// router.post("/camp", (req, res, next) => {
//   Event.create(req.body)
//     .then(event => res.send(event))
//     .catch(next);
// });

router.get("/item/", (req, res, next) => {
  Item.findByPk(req.params.id)
    .then(item => res.send(item))
    .catch(next);
});
module.exports = router;
