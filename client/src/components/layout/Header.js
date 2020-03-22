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
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Container>
                  <Row>
               <Col><img className="logo" src={logo} alt="Logo" style={{height: "130px", width: "130px"}} align="center" /></Col>
                <Col><h1 align="center">  <b>VARNO</b> DOMOV </h1></Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    heroUnit: {
        backgroundColor: '#e5e5e5 ',
    },
    heroContent: {
        maxWidth: 450,
        margin: '0 auto',
    },

});
export default withStyles(styles)(Header);