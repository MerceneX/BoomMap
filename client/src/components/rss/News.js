
import React from 'react';
import axios from "axios";
import parse from 'html-react-parser';

const serverLocation = require("../../config/keys.js").server;


var data = [];
var sliced = [];
var parsed;

class News extends React.Component {
    state = {
        datag: [],
        title: []
    };

    componentDidMount() {
        axios.get(`${serverLocation}/api/content/news`).then(res => {

            // this.setState({ datag: res.data }, () => console.log("Updated state"));
            this.setState({ datag: res.data.items.slice(0,10) }, () => console.log("Updated state"));
            this.setState({ title: res.data }, () => console.log("Updated state"));

            for (var key in this.state) {
                data.push(this.state[key]);
            }
        });
    }

    render() {
        let numbers;
        // console.log(this.state.datag);
        if (this.state.datag) {
            numbers = this.state.datag.map(item => {
                console.log("Iterating through for item " + item.title);
                parsed = parse(""+item.description+"");
              //  return <li><b>{item.title}</b> <br /> {item.description}<br /></li>;
                return parsed;
            });
        }
        return (
            <div className="containerEvents">
                <div className="col-xs-8">
                    <h4>{this.state.title.title}</h4>
                    <ul>{numbers}</ul>
                </div>
            </div>
        );
    }
}
export default News;
