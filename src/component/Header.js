import React, {useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import {Paper, Grid, AppBar, Button, Avatar, Typography} from '@material-ui/core';
import {useStyles} from '../styles/header'; 

export default function (props) {
    const {user} = props;
    const fullName = user && `${user.firstName} ${user.lastName}`;
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const container = (
        <Paper className={classes.headerContainer}>
            <Grid container justify="space-between" alignContent="center" className={classes.headerBar}>
                <Grid item>
                    <Typography variant="h4">
                        DashBoard
                    </Typography>
                </Grid>
                <Grid item className={classes.avatarContainer}>
                    <Avatar>JS</Avatar>
                    <Typography>{fullName}</Typography>
                </Grid>
            </Grid>
            <AppBar position="static" className={classes.appBar}>
                <Link exact to="/" activeClassName={classes.active}>
                    <Button>
                        Profile
                    </Button>
                </Link>
                <Link exact to="/investments" activeClassName={classes.active}>
                    <Button>
                        Investments
                    </Button>
                </Link>
            </AppBar>
        </Paper>
    );

    return {
        ...container
    }
}