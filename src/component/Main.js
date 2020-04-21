import React from 'react';
import {Paper} from '@material-ui/core';
import { useStyles } from "../styles/main";

export default function(props) {
    const {children} = props;
    const classes = useStyles();
    const component = (
        <Paper className={classes.root}>
            {children}
        </Paper>
    )

    return {
        ...component
    };
}

