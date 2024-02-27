const express = require('express');
const router = express.Router();
const timeline = require('../services/timeline');

/* GET timeline */
router.post('/', function(req, res, next) {
  try {
    let response = {"msg":"SUCCESS",
                    "data":timeline.getTimeline(req.body.routeID,req.body.stopID)}
    res.json(response)
  } catch(err) {
    console.error(`Error while getting stops `, err.message);
    next(err);
  }
})

module.exports = router;
