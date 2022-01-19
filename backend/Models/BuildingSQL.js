const { response } = require('express');
const sqlConnect = require('../helper/sqlHelper');

const Building = function (building) {};


Building.get = (callback) => {
    let sql = `SELECT Building FROM tbl_buildings`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      //logger.error(err.message);
      callback(err, null);
      return
    }
    console.log(result)
    callback(null, result);
    })
}

Building.add = (building, callback) => {
    let sql = `INSERT INTO tbl_buildings (Building) VALUES ("${building}")`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    callback(null, result);
    })
}

Building.remove = (building, callback) => {
    let sql = `DELETE FROM tbl_buildings WHERE Building="${building}"`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    callback(null, result);
    })
}

module.exports = Building;