import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';

import axios from 'axios';

var data = [
];


export default class NesreceVzrok extends PureComponent {

    state = {
        datag: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/26').then(res => {
            this.setState({datag: res.data});
            console.log(res.data);
            for(var key in this.state) {
                data.push(this.state[key]);
                // console.log(this.state[key]);
                //this.setState({datag: data[key]});
            }
        });
    }

    render() {
        return (
            <PieChart width={400} height={400}>
                <Pie dataKey="nesrece" isAnimationActive={false} data={this.state.datag.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Pie dataKey="nesrece" data={this.state.datag.data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
        );
    }
}

