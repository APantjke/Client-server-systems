const db = require('../services/db');

function getNearestStop(userLat,userLon) {
  const data = db.query(`SELECT stop_id, stop_name, stop_lat, stop_lon, stop_area, ( 6371 * acos (
                          cos ( radians(?) )* cos( radians( stop_lat ) )*
                          cos( radians( stop_lon ) - radians(?) )+
                          sin ( radians(?) )* sin( radians( stop_lat ) )))
                          AS distance FROM stops ORDER BY distance LIMIT 1`,[userLat,userLon,userLat]);

  return {
    data
  }
}

module.exports = {
  getNearestStop
}
//43.914145    20.358194
