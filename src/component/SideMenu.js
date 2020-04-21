import React from 'react';
import {Paper} from '@material-ui/core';
import {useStyles} from '../styles/sideMenu';

export default function () {
    const classes = useStyles();
    const container = (
        <Paper className={classes.sideMenuContainer}>
            This is SideMenu
        </Paper>
    );

    return {
        ...container
    }
}