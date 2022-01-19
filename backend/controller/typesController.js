// Add MySQL
const TypesSQL = require('../Models/TypesSQL.js');

// Function examples
exports.get = (req, res) => {
    TypesSQL.get((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            var types = []
            data.forEach(element => {
                types.push(element.Typ)
            });
            return res.send({
                message: 'Successfully get All types.',
                userData: types
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
    TypesSQL.add(req.body.type, (err, data) => {
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
    TypesSQL.remove(req.body.type, (err, data) => {
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

