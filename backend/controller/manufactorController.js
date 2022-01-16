// Add MySQL
const ManufactorSQL = require('../Models/ManufactorSQL.js');

// Function examples
exports.getManufactors = (req, res) => {
    ManufactorSQL.getManufactors((err, data) => {
        if (err) {
            logger.error(JSON.stringify(err));
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully get All Manufactors.',
                userData: data
            })
        }
    })
};

exports.getModels = (req, res) => {
    console.log("Bin da");
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    console.log(req.body, "BODY")
    ManufactorSQL.getModels(req.body.manufactor, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully get all Models.',
                userData: data
            })
        }
    })
};

