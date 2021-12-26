const sqlConnect = require('../helper/sqlHelper');

const Main = function (main) {};


Main.get = (callback) => {
    let sql = `SELECT * FROM tbl_test`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      logger.error(err.message);
      callback(err, null);
      return
    }
    console.log(result)
    callback(null, result);
    })
}

Main.post = (test, callback) => {
    let sql = `INSERT INTO tbl_test (_Text_) VALUES ("${test}")`
    sqlConnect.query(sql, function (err, result) {
    if (err) {
      callback(err, null);
      return
    }
    console.log(result)
    callback(null, result);
    })
}

module.exports = Main;