const sqlConnect = require('../helper/sqlHelper');

const Search = function (search) {};

function parseToInt(x) {
  const parsed = parseInt(x);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

Search.search = (sql, callback) => {
    sqlConnect.query(sql, function (err, result) {
      if (err) {
        callback(err, null);
        return
      }
      console.log(result)
      callback(null, result);
      })
}

module.exports = Search;