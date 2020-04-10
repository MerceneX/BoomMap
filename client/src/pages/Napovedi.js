import React from "react";
import TrafficForecast from "../components/rss/TrafficForecast";
import ForecastBannerImgLeft from "../components/design/ForecastBanner_left.svg";
import ForecastBannerImgRight from "../components/design/ForecastBanner_right.svg";

class StanjeNaCestah extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="banner">
					<img
						src={ForecastBannerImgLeft}
						alt="NewsBanner"
						className="bannerImgLeft bannerImg"
					/>
					<h1 className="bannerTitle">Prometne Napovedi</h1>
					<img
						src={ForecastBannerImgRight}
						alt="NewsBanner"
						className="bannerImgRight bannerImg"
					/>
				</div>
				<TrafficForecast />
			</React.Fragment>
		);
	}
}
export default StanjeNaCestah;
