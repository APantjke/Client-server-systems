const express = require('express');
const router = express.Router();
const buses = require('../services/buses');

/* GET buses */
router.post('/', function(req, res, next) {
  try {
    let response = {"msg":"SUCCESS",
                    "data":buses.getBuses(req.body.stop.value)}
    res.json(response)
  } catch(err) {
    console.error(`Error while getting stops `, err.message);
    next(err);
  }
})

module.exports = router;
