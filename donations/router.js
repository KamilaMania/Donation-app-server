const { Router } = require("express");
const Donation = require("./model");
const router = new Router();

router.get("/donations", (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;
  Donation.findAndCountAll({ limit, offset })
    .then(donations =>
      res.send({ data: donations.rows, total: donations.count })
    )
    .catch(next);
});

router.post("/donation", (req, res, next) => {
  Donation.create(req.body) // { amount, campId}
    .then(donation => res.send(donation))
    .catch(next);
});

// router.get("/donation/:id", (req, res, next) => {
//   Donation.findByPk(req.params.id)
//     .then(donation => res.send(donation))
//     .catch(next);
// });

module.exports = router;
