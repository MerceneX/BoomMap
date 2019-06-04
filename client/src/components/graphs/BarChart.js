import React, {PureComponent} from 'react';
import axios from 'axios';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


var data = [
];


export default class Test extends PureComponent {

    state = {
        datag: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/23').then(res => {
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
            <BarChart
                width={500}
                height={300}
                data={this.state.datag.podatki}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="leto"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="nesrece" fill="#8884d8"/>

            </BarChart>
        );
    }
}