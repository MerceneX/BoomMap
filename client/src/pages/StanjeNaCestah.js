import React from "react";
import axios from "axios";
import Borders from "../components/rss/Borders";
import RoadConditions from "../components/rss/RoadConditions";
import RoadEvents from "../components/rss/RoadEvents";
import News from "../components/rss/News";
import BorderIcon from "../components/design/BorderIcon.svg";
import EventsIcon from "../components/design/EventsIcon.svg";


class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<br></br>
				<div className="stanjeIcons">
				<img src={BorderIcon} alt="borderIcon"/>
				</div>
				<Borders/>
				<div className="stanjeIcons">
                				<img src={EventsIcon}  alt="eventIcon"/>
                				</div>
                				<RoadEvents/>
				<RoadConditions/>


			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
