import React from "react";
import axios from "axios";
import Borders from "../components/rss/Borders";
import RoadConditions from "../components/rss/RoadConditions";
import RoadEvents from "../components/rss/RoadEvents";
import BorderBanner from "../components/design/BorderBanner.svg";
import EventsBanner from "../components/design/EventsBanner.svg";
import ReportBanner from "../components/design/ReportBanner.svg";


class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img src={BorderBanner} alt="BorderBanner"/>
					</div>
				</div>

				<Borders/>
				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img src={EventsBanner}  alt="EventsBanner"/>
					</div>
				</div>

                <RoadEvents/>
				<div className="backgroundIcons">
					<div className="stanjeIcons">
						<img src={ReportBanner}  alt="ReportBanner"/>
					</div>
				</div>
				<RoadConditions/>


			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
