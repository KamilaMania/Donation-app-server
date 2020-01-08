const { Router } = require("express");
const Camp = require("./model");
const router = new Router();

router.get("/camps", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Camp.findAndCountAll({ limit, offset })
    .then(camps => res.send({ data: camps.rows, total: camps.count }))
    .catch(next);
});
// router.post("/camp", (req, res, next) => {
//   Event.create(req.body)
//     .then(event => res.send(event))
//     .catch(next);
// });

router.get("/camp/:id", (req, res, next) => {
  Camp.findByPk(req.params.id)
    .then(camp => res.send(camp))
    .catch(next);
});

// router.put("/camp/:id", (req, res, next) => {
//   Event.findByPk(req.params.id)
//     .then(camp => camp.update(req.body))
//     .then(camp => res.send(camp))
//     .catch(next);
// });

// router.delete("/camp/:id", (req, res, next) => {
//   Event.destroy({ where: { id: req.params.id } })
//     .then(number => res.send({ number }))
//     .catch(next);
// });

module.exports = router;
