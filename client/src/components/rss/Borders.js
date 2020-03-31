
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

        });
    }

    render() {
        let numbers;
        if (this.state.datag.items) {
            numbers = this.state.datag.items[0].map(item => {
                console.log("Iterating through for item " + item.title);
                return <div className="ContentStyle"><p><h5><b>{item.title}</b><hr/></h5> {item.description}<br/></p></div>;
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
export default borders;
