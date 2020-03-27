import React from "react";
import axios from "axios";
import Borders from "../components/rss/Borders";
import RoadConditions from "../components/rss/RoadConditions";
import RoadEvents from "../components/rss/RoadEvents";
import News from "../components/rss/News";
import TrafficForecast from "../components/rss/TrafficForecast";


class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Borders />
				<RoadConditions />
				<RoadEvents />
				<News />

			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
