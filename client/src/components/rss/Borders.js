
import React from 'react';
import axios from "axios";

const serverLocation = require("../../config/keys.js").server;


var data = [];

class borders extends React.Component {
    state = {
        datag: []
    };

    componentDidMount() {
        axios.get(`${serverLocation}/api/content/borders`).then(res => {
            this.setState({ datag: res.data }, () => console.log("Updated state"));
            for (var key in this.state) {
                data.push(this.state[key]);
            }

            //    console.log(this.state.datag.title);
            console.log(this.state.datag.items);
            //    console.log(this.state[key]);
        });
    }

    render() {
        let numbers;
        if (this.state.datag.items) {
            numbers = this.state.datag.items.map(item => {
                console.log("Iterating through for item " + item.title);
                return <li><b>{item.title}</b> <br /> {item.description}<br /></li>;
            });
        }
        return (
            <div className="container">
                <div className="col-xs-8">
                    <h1>{this.state.datag.title}</h1>
                    <ul>{numbers}</ul>
                </div>
            </div>
        );
    }
}
export default borders;
