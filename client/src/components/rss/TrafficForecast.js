
import React from 'react';
import axios from "axios";
import parse from 'html-react-parser';

const serverLocation = require("../../config/keys.js").server;


var data = [];
var parsed;

class TrafficForecast extends React.Component {
    state = {
        datag: []
    };

    componentDidMount() {
        axios.get(`${serverLocation}/api/content/traffic-forecast`).then(res => {
            this.setState({ datag: res.data }, () => console.log("Updated state"));
            for (var key in this.state) {
                data.push(this.state[key]);
            }

                console.log(this.state.datag.title);
             console.log(this.state.datag.items);
            //    console.log(this.state[key]);
        });
    }

    render() {
        let numbers;
        if (this.state.datag.items) {
            numbers = this.state.datag.items.map(item => {
                // console.log("Iterating through for item " + item.title);

               return <li><b>{item.title}</b> <br /> {item.description}<br /></li>;
            });
        }
        return (
            <div className="containerBorders">
                <div>
                    <h4 className="contentHeaderConditions">{this.state.datag.title}</h4>
                    <ul>{numbers}</ul>
                </div>
            </div>
        );
    }
}
export default TrafficForecast;
