const { response } = require('express');
const sqlConnect = require('../helper/sqlHelper');

const Types = function (building) {};


Types.get = (callback) => {
    let sql = `SELECT Typ FROM tbl_types`
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

Types.add = (type, callback) => {
    let sql = `INSERT INTO tbl_types (Typ) VALUES ("${type}")`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    callback(null, result);
    })
}

Types.remove = (type, callback) => {
    let sql = `DELETE FROM tbl_types WHERE Typ="${type}"`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    callback(null, result);
    })
}

module.exports = Types;