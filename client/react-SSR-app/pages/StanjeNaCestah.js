import React from "react";
import axios from "axios";
import Borders from "./components/rss/Borders";
import RoadConditions from "./components/rss/RoadConditions";
import RoadEvents from "./components/rss/RoadEvents";
import ReportBannerLeft from "./components/design/ReportBanner_left.svg";
import ReportBannerRight from "./components/design/ReportBanner_right.svg";
import BorderBannerLeft from "./components/design/BorderBanner_left.svg";
import BorderBannerRight from "./components/design/BorderBanner_right.svg";
import EventsBannerLeft from "./components/design/EventsBanner_left.svg";
import EventsBannerRight from "./components/design/EventsBanner_right.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/design/App.css";
import Layout from "./components/layout/Layout";

class StanjeNaCestah extends React.Component {
	render() {
		return (
			<Layout>
				<React.Fragment>
					<div className="banner">
						<img
							src={ReportBannerLeft}
							alt="NewsBanner"
							className="bannerImgLeft bannerImg"
						/>
						<h1 className="bannerTitle">Prometno poročilo</h1>
						<img
							src={ReportBannerRight}
							alt="NewsBanner"
							className="bannerImgRight bannerImg"
						/>
					</div>
					<RoadConditions />
					<div className="banner">
						<img
							src={BorderBannerLeft}
							alt="NewsBanner"
							className="bannerImgLeft bannerImg"
						/>
						<h2 className="bannerTitle">Mejnih prehodov</h2>
						<img
							src={BorderBannerRight}
							alt="NewsBanner"
							className="bannerImgRight bannerImg"
						/>
					</div>
					<Borders />
					<div className="banner">
						<img
							src={EventsBannerLeft}
							alt="NewsBanner"
							className="bannerImgLeft bannerImg"
						/>
						<h2 className="bannerTitle">Ostalih dogodkov</h2>
						<img
							src={EventsBannerRight}
							alt="NewsBanner"
							className="bannerImgRight bannerImg"
						/>
					</div>
					<RoadEvents />
				</React.Fragment>
			</Layout>
		);
	}
}
export default StanjeNaCestah;
