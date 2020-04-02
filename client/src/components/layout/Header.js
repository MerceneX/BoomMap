import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import logo from "../design/VarnoDomovLogo.svg";
import "../design/App.css";
import { withStyles } from "@material-ui/core/styles";
import Col from "reactstrap/es/Col";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";

function Header(props) {
	return (
		<div className="bcg">
			<h1>
				<span className="logo-bold">VARNO</span> DOMOV
			</h1>
			<img className="logo" src={logo} alt="Logo" />
		</div>
	);
}

export default Header;
