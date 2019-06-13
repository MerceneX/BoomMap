import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import logo from '../design/boomLogo.svg';
import '../design/App.css';
import { withStyles } from '@material-ui/core/styles';

function Header(props){
    const { classes } = props;
    return (
        <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
               <img className="logo" src={logo} alt="Logo" />
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Predvidevamo kritične regije za možnost nesreče in ozaveščamo voznike, reševalne službe
                    in tiste, ki se jim mudi, kje povečati potrpljenje in zmanjšati hitrost.
                </Typography>

            </div>
        </div>
    )

}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({


    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },

});
export default withStyles(styles)(Header);