const db = require('../services/db');

function getAreas() {
  const data = db.query(`SELECT DISTINCT stop_area FROM stops ORDER BY stop_area ASC`,[]);
  // Filtering data since some elements in it are empty or -- , so we dont want to display them into select dropdown
  let filteredData = data.filter(item=> item.stop_area.length>2)
  // Presenting them in array of objects with label, value so our SELECT component on UI can use it
  let formatedData= []
  filteredData.forEach((item) => {
     let element={"label":item.stop_area,
                  "value":item.stop_area}
    formatedData.push(element)
  })

  return {
    formatedData
  }
}

module.exports = {
  getAreas
}
