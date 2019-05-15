var util = require('util');
const express = require("express"),
    router = express.Router({ mergeParams: true }),
    bodyParser = require('body-parser'),
    axios = require('axios');

router.get("/", function(req, res) {
    res.send("This is a default Database Route. Hi!");
});

router.get("/nesrece", function(req, res) {
    axios.get("http://nesrece.avp-rs.si/geo/wfs/?request=getfeature&version=1.1.0&outputformat=json&service=wfs&resulttype=results&typename=BSM:view_bpn_n&cql_filter=datum%20between%20%2701.01.1994%27and%20%2712.05.2019%27")
        .then(response => {
            res.json(response.data);
        })
        .catch(err => {
            console.log(err);
            res.json({
                success:false
            })
        });
});

router.post("/",(req, res) => {
    res.send("Posr request succeded")
});

module.exports = router;