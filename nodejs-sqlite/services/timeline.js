const db = require('../services/db');

function getTimeline(busName,stopID) {

  let concat = "|| '-' ||"
  let concat2 = "|| ' ' ||"
  const data = db.query(`SELECT substr(CD.date,1,4) ${concat} substr(CD.date,5,2) ${concat} substr(CD.date,7,2) AS formated_date ,
                         CD.date, ST.arrival_time, T.direction_code, T.trip_headsign
                         FROM stop_times AS ST, trips AS T, routes AS R, calendar_dates AS CD WHERE R.route_short_name=? AND
                         ST.stop_id=? AND R.route_id= T.route_id AND T.trip_id = ST.trip_id AND
                         T.service_id = CD.service_id AND formated_date ${concat2} ST.arrival_time > datetime()
                         ORDER BY formated_date LIMIT 5 `,[busName,stopID]);
  return {
    data
  }
}

module.exports = {
  getTimeline
}
/*

*/
//busName,stopID
