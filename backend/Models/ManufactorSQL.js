const sqlConnect = require('../helper/sqlHelper');

const Manufactors = function (main) {};


Manufactors.getManufactors = (callback) => {
    let sql = `SELECT Manufactor FROM tbl_manufactor GROUP BY Manufactor`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      logger.error(err.message);
      callback(err, null);
      return
    }
    var data = []
    result.map(element => {
      data.push(element.Manufactor)
    })
    console.log(data)
    callback(null, data);
    })
}

Manufactors.getModels = (manufactor, callback) => {
  console.log(manufactor)
    let sql = `Select Model FROM tbl_manufactor WHERE Manufactor="${manufactor}"`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    console.log(result)
    callback(null, result);
    })
}

module.exports = Manufactors;