import React, {Component} from "react";

import logo from "../design/VarnoDomovLogo.svg";
import "../design/App.css";

export default class Header extends Component{
	render() {


	return (
		<div className="bcg">
			<h2>
				<span className="logo-bold">VARNO</span> DOMOV
			</h2>
			<img className="logo" src={logo} alt="Logo" />
		</div>
	);
	}
}


