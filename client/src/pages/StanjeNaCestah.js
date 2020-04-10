import React from "react";
import axios from "axios";
import Borders from "../components/rss/Borders";
import RoadConditions from "../components/rss/RoadConditions";
import RoadEvents from "../components/rss/RoadEvents";


class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img/>
					</div>
				</div>
				<RoadConditions/>

				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img/>
					</div>
				</div>

				<Borders/>

				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img/>
					</div>
				</div>
                <RoadEvents/>
				


			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
