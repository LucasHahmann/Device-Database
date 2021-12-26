// Add MySQL
const MainSQL = require('../Models/MainSQL.js');

// Function examples
exports.get = (req, res) => {
    MainSQL.get((err, data) => {
        if (err) {
            logger.error(JSON.stringify(err));
            res.status(500).send({
                message: err.message,
                userData: ""
            });
        } else {
            return res.send({
                message: 'Successfully get All Items.',
                userData: data
            })
        }
    })
};

exports.post = (req, res) => {
    if (!(req.body)) {
        res.status(400).send({
            message: 'No Body provided',
            userData: ""
        }); //bad request
        return;
    }
    MainSQL.post(req.body, (err, data) => {
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

