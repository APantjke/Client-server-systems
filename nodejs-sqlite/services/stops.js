const db = require('../services/db');

function getStops(area) {
  const data = db.query(`SELECT * from stops WHERE stop_area = ?`,[area]);

  //Here we are formating data in format that will fit our UI
  let formatedData= []
  data.forEach((item) => {
     let element={"label":item.stop_name,
                  "value":item.stop_id}
    formatedData.push(element)
  })

  return {
    formatedData
  }
}

module.exports = {
  getStops
}
