var util = require('util');
const express = require("express"),
    router = express.Router({mergeParams: true}),
    bodyParser = require('body-parser'),
    axios = require('axios');

router.get("/23", (req, res) => {
    res.json({
        naslov: "Nesreče skozi leta",
        podatki: [
            {
                leto: "2014",
                nesrece: "24345"
            },
            {
                leto: "2015",
                nesrece: "25654"
            },
            {
                leto: "2016",
                nesrece: "23569"
            },
            {
                leto: "2017",
                nesrece: "25234"
            },
            {
                leto: "2018",
                nesrece: "26615"
            }
        ]
    })
});

router.get("/24", (req, res) => {
    res.json({
        title: "Nesreče po dnevih leta",
        data: [
            {
                dan: "pon",
                nesrece: "10271"
            },
            {
                dan: "tor",
                nesrece: "8251"
            },
            {
                dan: "sre",
                nesrece: "7514"
            },
            {
                dan: "čet",
                nesrece: "8132"
            },
            {
                dan: "pet",
                nesrece: "55172"
            },
            {
                dan: "sob",
                nesrece: "32183"
            },
            {
                dan: "ned",
                nesrece: "13714"
            }
        ]
    })
});

router.get("/25", (req, res) => {
    res.json({
        title: "Nesreče glede na vreme",
        data: [
            {
                vreme: "deževno",
                nesrece: "21398"
            },
            {
                vreme: "jasno",
                nesrece: "45154"
            },
            {
                vreme: "megla",
                nesrece: "8917"
            },
            {
                vreme: "neznano",
                nesrece: "10361"
            },
            {
                vreme: "oblačno",
                nesrece: "4913"
            },
            {
                vreme: "sneg",
                nesrece: "8509"
            },
            {
                vreme: "toča",
                nesrece: "1498"
            },
            {
                vreme: "veter",
                nesrece: "7209"
            }
        ]
    })
});

router.get("/26", (req, res) => {
    res.json({
        title: "Nesreče glede na vzrok",
        data: [
            {
                vzrok: "nepravilnost na cesti",
                nesrece: "21398"
            },
            {
                vzrok: "neprilagojena hitrost",
                nesrece: "45154"
            },
            {
                vzrok: "nepravilnost pešca",
                nesrece: "1465"
            },
            {
                vzrok: "ostalo",
                nesrece: "10361"
            },
            {
                vzrok: "neupoštevanje pravil o prednosti",
                nesrece: "4213"
            },
            {
                vzrok: "nepravilno prehitevanje",
                nesrece: "3617"
            },
            {
                vzrok: "premiki z vozilom",
                nesrece: "1498"
            },
            {
                vzrok: "nepravilna stran / smer vožnje",
                nesrece: "1513"
            },
            {
                vzrok: "nepravilnost na tovoru",
                nesrece: "186"
            },
            {
                vzrok: "nepravilnost na vozilu",
                nesrece: "209"
            },
            {
                vzrok: "neustrezna varnostna razdalja",
                nesrece: "7209"
            }
        ]
    })
});

module.exports = router;