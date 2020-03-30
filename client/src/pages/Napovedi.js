import React from "react";
import TrafficForecast from "../components/rss/TrafficForecast";
import ForecastBanner from "../components/design/ForecastBanner.svg";


class StanjeNaCestah extends React.Component {
    render() {
        return (
            <React.Fragment>
                <br></br>
				<div className="stanjeIcons">
					<img src={ForecastBanner} alt="ForecastBanner"/>
				</div>
                <TrafficForecast />
            </React.Fragment>
        );
    }
}
export default StanjeNaCestah;
