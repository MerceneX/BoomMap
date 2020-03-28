import React from "react";
import axios from "axios";
import Borders from "../components/rss/Borders";
import RoadConditions from "../components/rss/RoadConditions";
import RoadEvents from "../components/rss/RoadEvents";
import News from "../components/rss/News";
import BorderIcon from "../components/design/BorderIcon.svg";


class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<br></br>
				<div className="borderIcon">
				<img src={BorderIcon} alt="borderIcon"/>
				</div>
				<Borders />
				<RoadConditions />
				<RoadEvents />
				<News />

			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
