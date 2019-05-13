var util = require('util');
const express = require("express"),
    router = express.Router({ mergeParams: true }),
    bodyParser = require('body-parser'),
    axios = require('axios');

router.get("/", function(req, res) {
    res.send("This is a default Database Route. Hi!");
});

router.post("/", bodyParser.json(),(req, res) => {
    axios.get(req.body.url)
        .then(response => {
            console.log(response.data);
            res.send("All is well man");
        })
        .catch(err => {
            console.log(err);
            res.send("It's gone to shit")
        });
    console.log(req.body.url);
});

module.exports = router;