// Add MySQL
const SearchSQL = require('../Models/SearchSQL.js');

// Function
exports.search = (req, res) => {
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    var sql = `SELECT *
    FROM tbl_personal
    INNER JOIN tbl_devices 
    ON tbl_personal.Device=tbl_devices.ID WHERE tbl_personal.Firstname = "${req.body.value}" or tbl_personal.Lastname = "${req.body.value}" or tbl_personal.PersonalID = "${req.body.value}" or tbl_personal.Building = "${req.body.value}" or tbl_personal.Room = "${req.body.value}" or
    tbl_devices.Typ = "${req.body.value}" or tbl_devices.Manufactor = "${req.body.value}" or tbl_devices.Model = "${req.body.value}"
    ;`
    const num = Number(req.body.value);
    if (Number.isInteger(num)) sql = `SELECT * FROM tbl_personal WHERE Telephone = ${parseInt(req.body.value)};`
    console.log(sql)
    SearchSQL.search(sql, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully query!',
                userData: data
            })
        }
    })
};

