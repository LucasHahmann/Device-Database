// Add MySQL
const BuildingSQL = require('../Models/BuildingSQL.js');

// Function examples
exports.get = (req, res) => {
    BuildingSQL.get((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            var buildings = []
            data.forEach(element => {
                buildings.push(element.Building)
            });
            return res.send({
                message: 'Successfully get All buildings.',
                userData: buildings
            })
        }
    })
};

exports.add = (req, res) => {
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    BuildingSQL.add(req.body.building, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully created!',
                userData: data
            })
        }
    })
};

exports.remove = (req, res) => {
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    BuildingSQL.remove(req.body.building, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully deleted!',
                userData: data
            })
        }
    })
};

