const db = require('../services/db');

function getBuses(stopID) {
  const data = db.query(`SELECT DISTINCT R.route_id, R.route_short_name
                         FROM stop_times AS ST, stops AS S, trips AS T, routes AS R
                         WHERE S.stop_id=? AND S.stop_id = ST.stop_id
                         AND ST.trip_id=T.trip_id AND T.route_id=R.route_id
                         ORDER BY R.route_short_name ASC`,[stopID]);

  return {
    data
  }
}

module.exports = {
  getBuses
}
