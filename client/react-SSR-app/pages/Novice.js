import React from "react";
import News from "./components/rss/News";
import NewsBannerImgLeft from "./components/design/NewsBanner_left.svg";
import NewsBannerImgRight from "./components/design/NewsBanner_right.svg";
import "./components/design/App.css";
import Layout from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

class Novice extends React.Component {
	render() {
		return (
			<Layout>
				<React.Fragment>
					<div className="banner">
						<img
							src={NewsBannerImgLeft}
							alt="NewsBanner"
							className="bannerImgLeft bannerImg"
						/>
						<h1 className="bannerTitle">Prometne Novice</h1>
						<img
							src={NewsBannerImgRight}
							alt="NewsBanner"
							className="bannerImgRight bannerImg"
						/>
					</div>
					<News />
				</React.Fragment>
			</Layout>
		);
	}
}
export default Novice;
