import React from 'react';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import '../design/App.css';
import {withStyles} from "@material-ui/core";

function Footer(props){
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Vir podatkov: OPSI
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">

                Kontakt: marko.gluhak@student.um.si
            </Typography>
        </footer>
    )

}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({

    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: 'blue',
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    footer: {
        backgroundColor: '#d0d6dc',
        padding: theme.spacing.unit * 6,
    },
});
export default withStyles(styles)(Footer);