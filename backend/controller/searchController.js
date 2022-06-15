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
    SearchSQL.search(req.body, (err, data) => {
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

