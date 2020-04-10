import React from "react";
import TrafficForecast from "../components/rss/TrafficForecast";


class StanjeNaCestah extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="backgroundIcons">
				<div className="stanjeIcons">
					<img/>
				</div>
                </div>
                <TrafficForecast />
            </React.Fragment>
        );
    }
}
export default StanjeNaCestah;
