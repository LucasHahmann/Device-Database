const sqlConnect = require('../helper/sqlHelper');

const Device = function (Device) {};

Device.createDevice = (data, callback) => {
  data.data.device.forEach(element => {
    let sql = `INSERT INTO tbl_devices (Typ, Manufactor, Model, Delivery_Date) VALUES ("${element.device}", "${element.manufactor}", "${element.model}", "${element.deliveryDate}")`
    console.log(sql)
    sqlConnect.query(sql, function (err, result) {
      if (err) {
        callback(err, null);
        return
      }
      var ID = result.insertId;
      let sql = `INSERT INTO tbl_personal (Firstname, Lastname, PersonalID, Building, Room, Telephone, Device) VALUES ("${data.data.firstname}", "${data.data.lastname}", "${data.data.ID}", "${data.data.building}", "${data.data.roomNumber}", "${data.data.telephoneNumber}", "${ID}")`
      console.log(sql)
      sqlConnect.query(sql, function (err, result) {
        if (err) {
          callback(err, null);
          return
        }
        console.log(result)
        
        })  
    })
      
  });
  callback(null, result);
}

module.exports = Device;