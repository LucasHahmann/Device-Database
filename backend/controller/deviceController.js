// Add MySQL
const DeviceSQL = require('../Models/DeviceSQL.js');

// Function examples
exports.createDevice = (req, res) => {
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    console.log(req.body)
    DeviceSQL.createDevice(req.body, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully created!'
            })
        }
    })
};

