const db = require("../config/database");

let queryMen = [];

class QueryMan {
    constructor(id, title, values, decodedValues, collection, attributes, regex) {
        this.id = id;
        this.title = title;
        this.values = values;
        this.decodedValues = decodedValues;
        this.collection = collection;
        this.attributes = attributes;
        this.regex = regex;
        this.data = null;
    }

    executeQuery(value){
        return db.getDB().collection(this.collection).find({[this.attributes]: value}).count();
    }

    async queryData (keys) {
        const result = {
            naslov: this.title,
            podatki: []
        };
        const valNum = this.values.length;
        for (let i = 0; i < valNum; i++) {
            const value = this.values[i];
            let numOf;
            if(!this.regex) numOf = await this.executeQuery(value);
            else {
                const rxValue = new RegExp(value);
                numOf = await await this.executeQuery(rxValue);
            }
            const entry = {
                [keys[0]]: this.decodedValues[i] ? this.decodedValues[i]:this.values[i],
                [keys[1]]: numOf
            };
            result.podatki.push(entry);
        }
        this.data = result;
        queryMen.push(this);
        return result;
    };

    static getQueryMan (id) {
        let output = false;
        queryMen.forEach((qMan) => {
            if(qMan.id === id)
            {
                output = qMan;
            }
        });
        return output;
    };
}


module.exports = QueryMan;