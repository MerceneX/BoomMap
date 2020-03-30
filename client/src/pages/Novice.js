import React from "react";
import axios from "axios";
import News from "../components/rss/News";
import NewsBanner from "../components/design/NewsBanner.svg";

class Novice extends React.Component {
	render() {
		return (
			<React.Fragment>
				<br></br>
				<div className="stanjeIcons">
					<img src={NewsBanner} alt="NewsBanner"/>
				</div>
				<News />
			</React.Fragment>
		);
	}
}
export default Novice;
