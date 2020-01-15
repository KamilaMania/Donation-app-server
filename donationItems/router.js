const { Router } = require("express");
const DonationItem = require("./model");
const router = new Router();

router.get("/donationItems", (req, res, next) => {
  const limit = req.query.limit || 100;
  const offset = req.query.offset || 0;
  DonationItems.findAndCountAll({ limit, offset })
    .then(donationItems =>
      res.send({ data: donationItems.rows, total: donationItems.count })
    )
    .catch(next);
});
router.post("/donationItem", (req, res, next) => {
  DonationItem.create(req.body)
    .then(donationItem => res.send(donationItem))
    .catch(next);
});

// router.get("/donation/:id", (req, res, next) => {
//   Donation.findByPk(req.params.id)
//     .then(donation => res.send(donation))
//     .catch(next);
// });

module.exports = router;
