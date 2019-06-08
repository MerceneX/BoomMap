import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from "axios";

var data = [];


export default class NesreceVozilo extends Component {

    state = {
        datag: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/27').then(res => {
            this.setState({datag: res.data});
            console.log(res.data);
            for (var key in this.state) {
                data.push(this.state[key]);
                // console.log(this.state[key]);
                //this.setState({dataLeto: data[key]});
            }
        });
    }

    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={this.state.datag.podatki}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="vozilo" interval={0} fontSize={10}  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nesrece" stroke="#317256" dot={{ stroke: '#52bf90', strokeWidth: 2 }} />
            </LineChart>
        );
    }
}
