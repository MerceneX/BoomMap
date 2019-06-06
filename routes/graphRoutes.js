const express = require("express"),
    router = express.Router({mergeParams: true}),
    db = require("../config/database"),
    QueryMan = require("../lib/queries");


const accidentsCollection = "nesrece",
    peopleCollection = "osebe";


router.get("/23", async (req, res) => {
    // N/A
    const values = [2014,2015,2016,2017,2018];
    const keys = ["leto","nesrece"];
    const queryMan = QueryMan.getQueryMan(23);
    if(queryMan)res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(23,"Nesreče glede na leto", values, [], accidentsCollection, "Datum_Nesrece", true);
        res.json(await queryMan.queryData(keys));
    }
});

router.get("/24", async (req, res) => {
    // N/A
    const values = ['0w', '1w', '2w', '3w', '4w','5w' , '6w'];
    const decodedValues = ['ponedeljek', 'torek', 'sreda', 'četrtek', 'petek', 'sobota', 'nedelja'];
    const keys = ["dan","nesrece"];
    const queryMan = QueryMan.getQueryMan(24);
    if(queryMan)res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(24,"Nesreče glede na dan", values, decodedValues, accidentsCollection, "dan_v_tednu", false);
        res.json(await queryMan.queryData(keys));
    }
});

router.get("/25", async (req, res) => {
    //PRVR
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
    //PRVZ
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


router.get("/27", async (req, res) => {
    //LVVN
    const values = [ 7, 11, 5, 12, 8, 10, 2, 4, 9, 3, 6, 1];
    const decodedValues = ['tovorno vozilo','delovno vozilo','avtobus','tovorno vozilo','tovorno vozilo', 'vlečno vozilo', 'osebni avtomobil', 'avtobus', 'tovorno vozilo', 'avtobus', 'avtobus', 'osebni avtomobil'];
    const keys = ["vozilo","nesrece"];
    const queryMan = QueryMan.getQueryMan(27);
    if(queryMan) res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(27,"Nesreče glede na vozilo", values, decodedValues, accidentsCollection, "LVVN_vrsta_vozila", true);
        res.json(await queryMan.queryData(keys));
    }
});

router.get("/28", async (req, res) => {
    //PRVU
    const values = ['AV', 'DS', 'K1', 'KM', 'KO', 'KR', 'KV', 'LK', 'LV', 'M1', 'MK', 'MO', 'OA', 'OD', 'OS', 'PE', 'PO', 'PT', 'SD', 'SK', 'SM', 'SP', 'SV', 'TK', 'TR', 'TV', 'UC', 'KO', 'MK', 'OA', 'PE', 'PT', 'XX'];
    const decodedValues = ['VOZNIK AVTOBUSA', 'VOZNIK DELOVNEGA STROJA', 'VOZNIK KOLESA S POMOŽNIM ELEKTRIČNIM MOTORJEM', 'VOZNIK KOLESA Z MOTORJEM', 'KOLESAR', 'X-KRŠITELJ - JRM', 'VOZNIK KOMBINIRANEGA VOZILA', 'VOZNIK LAHKEGA ŠTIRIKOLESA', 'LASTNIK VOZILA', 'VOZNIK MOPEDA DO 25 KM/H', 'VOZNIK MOTORNEGA KOLESA', 'VOZNIK MOPEDA', 'VOZNIK OSEBNEGA AVTOMOBILA', 'ODGOVORNA OSEBA', 'OSTALO', 'PEŠEC', 'PRAVNA OSEBA', 'POTNIK', 'POSAMEZNIK, S.P., KI SAMOSTOJNO OPRAVLJA DEJAVNOST IN ZAPOSLUJE DRUGE', 'VOZNIK ŠTIRIKOLESA', 'SKRBNIK MLADOLETNIKA', 'SAMOSTOJNI PODJETNIK', 'VOZNIK SPECIALNEGA VOZILA', 'VOZNIK TRIKOLESA', 'VOZNIK TRAKTORJA', 'VOZNIK TOVORNEGA VOZILA', 'UČITELJ VOŽNJE MED USPOSABLJANJEM KANDIDATA ZA VOZNIKA MV', 'KOLESARJI', 'VOZNIKI MOTORNIH KOLES', 'VOZNIKI OSEBNIH AVTOMOBILOV', 'PEŠCI', 'POTNIKI', 'DRUGI UDELEŽENCI'];
    const keys = ["udelezenec","nesrece"];
    const queryMan = QueryMan.getQueryMan(28);
    if(queryMan) res.json(queryMan.data);
    else {
        const queryMan = new QueryMan(28,"Nesreče glede na udelezence", values, decodedValues, peopleCollection, "PRVO_vloga_udelezenca", false);
        res.json(await queryMan.queryData(keys));
    }
});


module.exports = router;