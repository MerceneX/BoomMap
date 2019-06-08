import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import MyCard2 from '../MyCard2';

import axios from 'axios';


var data = [
];

export default class Test extends PureComponent {

    state = {
        dataLeto: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/23').then(res => {
            this.setState({dataLeto: res.data});
            console.log(res.data);
            for(var key in this.state) {
                data.push(this.state[key]);
               // console.log(this.state[key]);
                //this.setState({dataLeto: LData[key]});
            }
        });
    }

    render() {
        return (
            <AreaChart
                width={500}
                height={300}
                data={this.state.dataLeto.podatki}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="leto" />
                <YAxis />
                <Tooltip />
                <Legend/>
                <Area type="monotone" dataKey="nesrece" stroke="#66b2b2" fill="#66b2b2" />
            </AreaChart>
        );
    }
}
