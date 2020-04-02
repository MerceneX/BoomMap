import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import Select from "react-select";
import Map from "../components/Map";
import Legend from "../components/Legend";
import { Container, Row, Col } from "reactstrap";
import { Grid } from "@material-ui/core";
import CustomFilter from "../components/CustomFilter";
import Breakpoint, { BreakpointProvider } from "react-socks";

const options = [
	{ value: "current", label: "Trenutno stanje" },
	{ value: "all", label: "Kritični odseki" }
];

class SimpleMap extends Component {
	constructor(props) {
		super(props);
		this.mapElement = React.createRef();
		this.legendElement = React.createRef();
		this.customFilter = React.createRef();
		this.state = {
			selectedOption: "all"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = selectedOption => {
		this.mapElement.current.changeOption(selectedOption);
		this.setState({ selectedOption: selectedOption });
		let visi = selectedOption.value === "all" ? "visible" : "hidden";
		console.log(selectedOption);
		console.log(visi);
		this.customFilter.current.changeVisibility(visi);
	};

	handleLegendChange = newLegend => {
		this.mapElement.current.changeCriticalLevel(newLegend);
	};

	handleFilterSubmit = (state, surface) => {
		this.mapElement.current.changeFilterOptions(state, surface);
	};
	render() {
		const { selectedOption } = this.state;

		return (
			// Important! Always set the container height explicitly
			<div class="map-container">
				<div className="legend">
					<h5>Možnosti:</h5>
					<Select
						defaultValue={options[0]}
						onChange={this.handleChange}
						options={options}
					/>
					<Legend ref={this.legendElement} change={this.handleLegendChange} />
					<CustomFilter
						change={this.handleFilterSubmit}
						ref={this.customFilter}
					/>
				</div>
				<div className="map">
					<Map option={this.state.selectedOption} ref={this.mapElement} />
				</div>
			</div>
		);
	}
}

export default SimpleMap;
