import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import logo from '../design/VarnoDomov_logo.svg';
import '../design/App.css';
import { withStyles } from '@material-ui/core/styles';

function Header(props){
    const { classes } = props;
    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
               <img className="logo" src={logo} alt="Logo" style={{height: "130px", width: "130px"}} align="center" />
                <h1 align="center">  <b>VARNO</b> DOMOV </h1>
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