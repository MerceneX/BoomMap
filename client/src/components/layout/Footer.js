import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import '../design/App.css';
import {withStyles} from "@material-ui/core";

function Footer(props){
    const { classes } = props;
    return (
        <footer className={classes.footer} >
            <Typography variant="h6" align="center" gutterBottom>
                Vir podatkov: <a href="https://www.avp-rs.si/">avp-rs.si</a>
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Kontakt: varnodomov.info@gmail.com
            </Typography>
        </footer>
    )

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({

    footer: {
        backgroundColor: '#E1DDDB',
        padding: theme.spacing.unit * 6,
    },
});
export default withStyles(styles)(Footer);