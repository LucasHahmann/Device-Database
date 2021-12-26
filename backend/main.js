// Modules...
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setup
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Allow all cors
app.options('*', cors());

const port = 3000

// Add routes
app.get("/test", (req, res) => {
    res.json("It work!");
})

const mainRoute = require('./routes/main/index.js');
app.use('/main', mainRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})