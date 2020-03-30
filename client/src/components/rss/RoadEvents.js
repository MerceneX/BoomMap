
import React from 'react';
import axios from "axios";

const serverLocation = require("../../config/keys.js").server;


var data = [];
var sliced = [];

class DogodkiNaCestah extends React.Component {
    state = {
        datag: [],
        title: []
    };

    componentDidMount() {
        axios.get(`${serverLocation}/api/content/road-events`).then(res => {

            this.setState({ datag: res.data.items.slice(0,10) }, () => console.log("Updated state"));
            this.setState({ title: res.data }, () => console.log("Updated state"));
            console.log(this.state.datag[0]);

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
                return <p><h5><b>{item.title}</b></h5> {item.description}<br /><hr /></p>;
            });
        }
        return (
            <div className="containerEvents">
                <div className="col-xs-8">
                    <h4>Road Events</h4>
                    <ul>{numbers}</ul>
                </div>
            </div>
        );
    }
}
export default DogodkiNaCestah;
