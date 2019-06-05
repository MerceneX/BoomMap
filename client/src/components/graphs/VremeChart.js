import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import axios from "axios";



const data = [

];



export default class VremeChart extends PureComponent {

    state = {
        datag: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/graph/25').then(res => {
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
                <Pie isAnimationActive={false} data={this.state.datag.data} dataKey="nesrece" cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                <Tooltip />
            </PieChart>
        );
    }
}
