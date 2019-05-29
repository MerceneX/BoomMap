var util = require('util');
const express = require("express"),
    router = express.Router({mergeParams: true}),
    bodyParser = require('body-parser'),
    axios = require('axios');

router.get("/23", (req, res) => {
    res.json({
        title: "Nesreče skozi leta",
        data: [
            {
                year: "2011",
                accidents: "188"
            },
            {
                year: "2012",
                accidents: "200"
            },
            {
                year: "2013",
                accidents: "132"
            },
            {
                year: "2014",
                accidents: "100"
            }
        ]
    })
});


module.exports = router;