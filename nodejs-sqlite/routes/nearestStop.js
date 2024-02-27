const express = require('express');
const router = express.Router();
const nearestStop = require('../services/nearestStop');

/* GET nearestStop */
router.post('/', function(req, res, next) {
  try {
    let response = {"msg":"SUCCESS",
                    "data":nearestStop.getNearestStop(req.body.userLat,req.body.userLon)}
    res.json(response)
  } catch(err) {
    console.error(`Error while getting stops `, err.message);
    next(err);
  }
})

module.exports = router;
