import React, { PureComponent } from "react";
import axios from "axios";

const serverLocation = require("../config/keys.js").server;

var data = [];

export default class StanjeNaCestah extends React.Component {
	state = {
		datag: []
	};

	componentDidMount() {
		axios.get(`${serverLocation}/api/content/borders`).then(res => {
			this.setState({ datag: res.data }, () => console.log("Updated state"));
			for (var key in this.state) {
				data.push(this.state[key]);
			}

			//    console.log(this.state.datag.title);
			console.log(this.state.datag.items);
			//    console.log(this.state[key]);
		});
	}

	render() {
		let numbers;
		if (this.state.datag.items) {
			numbers = this.state.datag.items.map(item => {
				console.log("Iterating through for item " + item.title);
				return <li>{item.title}</li>;
			});
		}
		return (
			<div className="container">
				<div className="col-xs-8">
					<h1>{this.state.datag.title}</h1>
					<ul>{numbers}</ul>
				</div>
			</div>
		);
	}
}
/*
import React, { PureComponent } from "react";
import axios from "axios";

const serverLocation = require("../config/keys.js").server;

var data = [];

export default class StanjeNaCestah extends React.Component {
	state = {
		datag: []
	};

	componentDidMount() {
		axios.get(`${serverLocation}/api/content/road-conditions`).then(res => {
			this.setState(
				{
					datag: res.data
				},
				function() {
					console.log("Datag updated");
					console.log(this.state);
				}
			);
			for (var key in this.state) {
				data.push(this.state[key]);
			}
		});
	}

	componentWillUpdate() {
		console.log("WillUpdating");
		console.log(this.state);
	}

	render() {
		console.log("Render called");
		console.log(this.state.datag.items);
		//const itemz = this.state.datag.items.map((item, key) => <h3>{item}</h3>);
		let numbers;
		//numbers = this.state.datag.items;
		if (this.state.datag.items) {
			numbers = this.state.datag.items.map(item => {
				console.log("Iterating through for item " + item.title);
				return <div>{item.title}</div>;
			});
		}
		console.log("Logging numbers");
		console.log(numbers);
		return <ul>{numbers}</ul>;
		/*return (
			<div className="container">
				<div className="col-xs-8">
					<h1>{this.state.datag.title}</h1>
					{itemz}
				</div>
			</div>
		);
	}
}

*/
