var util = require('util');
const express = require("express"),
    router = express.Router({mergeParams: true}),
    bodyParser = require('body-parser'),
    axios = require('axios'),
    db = require("../config/database");

    router.get("/test", async (req, res) => {
    const result = {
        naslov: "Nesreče skozi leta",
        podatki: []
    };
    for (let i = 4; i < 9; i++) {
        const queryString = `201${i}`;
        const query = new RegExp(queryString);
        const numOf = await db.getDB().collection("nesrece").find({"Datum_Nesrece": {$regex: query}}).count();
        const entry = {
            leto: queryString,
            nesrece: numOf
        };
        result.podatki.push(entry);
        console.log(query + "\n" + numOf);
    }
    res.json(result);
});

router.get("/23", async (req, res) => {
    const result = {
        naslov: "Nesreče skozi leta",
        podatki: []
    };
    for (let i = 4; i < 9; i++) {
        const queryString = `201${i}`;
        const query = new RegExp(queryString);
        const numOf = await db.getDB().collection("nesrece").find({"Datum_Nesrece": {$regex: query}}).count();
        const entry = {
            leto: queryString,
            nesrece: numOf
        };
        result.podatki.push(entry);
        console.log(query + "\n" + numOf);
    }
    res.json(result);
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
    const result = {
        naslov: "Nesreče glede na vreme",
        podatki: []
    };
    const values = ['JASNO', 'OBLAČNO', 'DEŽEVNO', 'NEZNANO', 'MEGLA', 'SNEG', 'VETER', 'TOČA'];
    const valNum = values.length;
    for (let i = 0; i < valNum; i++) {
        const value = values[i];
        const numOf = await db.getDB().collection("nesrece").find({"PRVR_Vreme": value[0]}).count();
        const entry = {
            vreme: value,
            nesrece: numOf
        };
        result.podatki.push(entry);
    }
    res.json(result);
});

router.get("/26", async (req, res) => {
    const result = {
        naslov: "Nesreče glede na vzrok",
        podatki: []
    };
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
    const valNum = values.length;
    for (let i = 0; i < valNum; i++) {
        const value = values[i];
        const numOf = await db.getDB().collection("nesrece").find({"PRVZ_vzrok": value}).count();
        const entry = {
            vzrok: decodedValues[i],
            nesrece: numOf
        };
        result.podatki.push(entry);
    }
    res.json(result);

    /*{
        title: "Nesreče glede na vzrok",
        data: [
            {
                vzrok: "nepravilnost na cesti",
                nesrece: "21398"
            },*/
});

module.exports = router;