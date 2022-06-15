const sqlConnect = require('../helper/sqlHelper');

const Search = function (search) {};

function parseToInt(x) {
  const parsed = parseInt(x);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

Search.search = (body, callback) => {
    console.log(body.value);
    if(parseToInt(body.value) == 0) return callback("Error", null);
    
    //
    let sql = `SELECT * FROM tbl_personal WHERE Firstname = "${body.value}" or Lastname = "${body.value}" or PersonalID = "${body.value}" or Building = "${body.value}" or Room = "${body.value}" or Telephone = ${parseInt(body.value)};`
    console.log(sql)
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