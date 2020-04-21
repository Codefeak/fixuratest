import React from 'react';
import {Paper} from '@material-ui/core';
import {useStyles} from '../styles/header'; 

export default function () {
    const classes = useStyles();
    const container = (
        <Paper className={classes.headerContainer}>
            This is Footer
        </Paper>
    );

    return {
        ...container
    }
}