import React from "react";
import TrafficForecast from "../components/rss/TrafficForecast";
import ForecastBanner from "../components/design/ForecastBanner.svg";


class StanjeNaCestah extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="backgroundIcons">
				<div className="stanjeIcons">
					<img src={ForecastBanner} alt="ForecastBanner"/>
				</div>
                </div>
                <TrafficForecast />
            </React.Fragment>
        );
    }
}
export default StanjeNaCestah;
