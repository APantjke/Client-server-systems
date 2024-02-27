const express = require('express');
const router = express.Router();
const areas = require('../services/areas');

/* GET areas */
router.get('/', function(req, res, next) {
  try {
    let response = {"msg":"SUCCESS",
                    "data":areas.getAreas()}

    res.json(response);
  } catch(err) {
    console.error(`Error while getting areas `, err.message);
    next(err);
  }
})

module.exports = router;
