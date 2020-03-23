import React from 'react';

import axios from 'axios';
const serverLocation = require("../config/keys.js").server;
var data = [
];

export default class StanjeNaCestah extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
 //   axios.get(`https://jsonplaceholder.typicode.com/users`)
     axios.get(`${serverLocation}/api/content/road-conditions`).then(res => {
       //axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({persons: res.data});
           for(var key in this.state) {
                data.push(this.state[key]);

            }

//console.log(this.state.persons.items[0].title);
//console.log(this.state.persons);


        });
  }

  render() {
  console.log(this.state.persons.items);
  const test = this.state.persons.items;
  //console.log(test);
test.forEach(item=>{
     console.log(item);
 });
 //console.log(this.state.persons.title[0])

    return (
<p>hej</p>

        )
    }
}