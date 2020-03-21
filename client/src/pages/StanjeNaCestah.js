import React, {PureComponent} from 'react';
import axios from 'axios';

const serverLocation = require("../config/keys.js").server;


var data = [
];

export default class StanjeNaCestah extends React.Component {

    state = {
        datag: [],
    }


   componentDidMount() {
        axios.get(`${serverLocation}/api/content/borders`).then(res => {
            this.setState({datag: res.data});
           for(var key in this.state) {
                data.push(this.state[key]);

            }

        //    console.log(this.state.datag.title);
            console.log(this.state.datag.items);
        //    console.log(this.state[key]);
        });
    }



    render() {
        return (


       <div className="container">
        <div className="col-xs-8">
        <h1>{this.state.datag.title}</h1>

        </div>
       </div>


        );
    }
}
