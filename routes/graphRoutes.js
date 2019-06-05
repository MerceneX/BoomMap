const express = require("express"),
    router = express.Router({mergeParams: true}),
    db = require("../config/database"),
    QueryMan = require("../lib/queries");


const accidentsCollection = "nesrece",
    peopleCollection = "osebe";


router.get("/23", async (req, res) => {
    const values = [2014,2015,2016,2017,2018];
    const keys = ["leto","nesrece"];
    const queryMan = QueryMan.getQueryMan(23);
    if(queryMan)res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(23,"Nesreče glede na leto", values, [], accidentsCollection, "Datum_Nesrece", true);
        res.json(await queryMan.queryData(keys));
    }
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

router.get("/25", async (req, res) => {
    const values = ['J', 'O', 'D', 'N', 'M', 'S', 'V', 'T'];
    const decodedValues = ['JASNO', 'OBLAČNO', 'DEŽEVNO', 'NEZNANO', 'MEGLA', 'SNEG', 'VETER', 'TOČA'];
    const keys = ["vreme","nesrece"];
    const queryMan = QueryMan.getQueryMan(25);
    if(queryMan) res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(25,"Nesreče glede na vreme", values, decodedValues, accidentsCollection, "PRVR_Vreme", false);
        res.json(await queryMan.queryData(keys));
    }
});

router.get("/26", async (req, res) => {
    const values = ['NP', 'SV', 'PV', 'OS', 'HI', 'PD', 'PR', 'VR', 'TO', 'CE', 'VO'];
    const decodedValues = [
        'Nepravilnost pešca',
        'Nepravilna smer vožnje',
        'Premiki z vozilom',
        'Ostalo',
        'Neprilagojena Hitrost',
        'Neupoštevanje pravil o prednosti',
        'Nepravilno prehitevanje',
        'Neustrezna varnostna razdalja',
        'Nepravilnost na tovoru',
        'Nepravilnost na cesti',
        'Neustrezna varnostna razdalja'
    ];
    const keys = ["vzrok","nesrece"];
    const queryMan = QueryMan.getQueryMan(26);
    if(queryMan){
        console.log("QueryMan is alive!");
        res.json(queryMan.data);
    } else {
        const queryMan = new QueryMan(26,"Nesreče glede na vzroke", values, decodedValues, accidentsCollection, "PRVZ_vzrok", false);
        res.json(await queryMan.queryData(keys));
    }
});


module.exports = router;