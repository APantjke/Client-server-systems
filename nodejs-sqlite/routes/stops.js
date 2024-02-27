const express = require('express');
const router = express.Router();
const stops = require('../services/stops');

/* GET stops */
router.post('/', function(req, res, next) {
  try {
    let response = {"msg":"SUCCESS",
                    "data":stops.getStops(req.body.area.value)}
    res.json(response)
  } catch(err) {
    console.error(`Error while getting stops `, err.message);
    next(err);
  }
})

module.exports = router;
