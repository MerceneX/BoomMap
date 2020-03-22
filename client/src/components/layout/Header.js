import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import logo from '../design/VarnoDomov_logo.svg';
import '../design/App.css';
import { withStyles } from '@material-ui/core/styles';
import Col from "reactstrap/es/Col";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";

function Header(props){
    const { classes } = props;
    return (
        <div>
            <div>
              <Container className="headerContainter">
                    <Row>
                        <Col className="pageName"><h1 align="right">  <b>VARNO</b> DOMOV </h1></Col>
                        <Col><img className="logo" src={logo} alt="Logo" style={{height: "130px", width: "130px"}} /></Col>
                    </Row>
              </Container>
            </div>
        </div>
    )
}



export default Header;