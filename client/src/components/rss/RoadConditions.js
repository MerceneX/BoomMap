
import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import parse from 'html-react-parser';
const serverLocation = require("../../config/keys.js").server;


var data = [];
var parsed;
class RoadConditions extends React.Component {
    state = {
        datag: []
    };


    componentDidMount() {
        axios.get(`${serverLocation}/api/content/road-conditions?limit=1`).then(res => {
            this.setState({ datag: res.data }, () => console.log("Updated state"));
            console.log(this.state.datag.items[0])
            for (var key in this.state) {
                data.push(this.state[key]);
            }

        });
    }

    render() {
        let numbers;
        if (this.state.datag.items) {
            console.log(this.state.datag.items[0]);
                numbers = this.state.datag.items[0].map(item => {
                   parsed=parse(""+item.description+"");
                    return <p><h5><b>{item.title}</b></h5> <br />  {parsed} <br /><hr/></p>;

                });
        }
        return (
            <div className="containerEvents">
                <div className="col-xs-8">
                    <ul>{numbers}</ul>
                </div>
            </div>
        );
    }
}
export default RoadConditions;
