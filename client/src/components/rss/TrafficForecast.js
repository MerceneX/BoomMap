

import React from 'react';
import axios from "axios";
import parse from 'html-react-parser';

const serverLocation = require("../../config/keys.js").server;


var data = [];
var sliced = [];
var parsed;

class TrafficForecast extends React.Component {
    state = {
        datag: [],
        title: []
    };

    componentDidMount() {
        axios.get(`${serverLocation}/api/content/traffic-forecast`).then(res => {

            this.setState({ datag: res.data.items.slice(0,3) }, () => console.log("Updated state"));
            this.setState({ title: res.data }, () => console.log("Updated state"));

            for (var key in this.state) {
                data.push(this.state[key]);
            }
        });
    }

    render() {
        let numbers;
         console.log(this.state.datag[0]);
        if (this.state.datag[0]) {
            numbers = this.state.datag[0].map(item => {
                console.log("Iterating through for item " + item.title);
                parsed = parse(""+item.description+"");
                return <p><h4><b>{item.title}</b></h4><br />   {parsed} <br /><hr/></p>;
            });
        }
        return (
            <div className="containerEvents">
                <div className="col-xs-8">
                    <h4>{this.state.title.title}</h4>

                    {numbers}
                </div>
            </div>
        );
    }
}
export default TrafficForecast;
