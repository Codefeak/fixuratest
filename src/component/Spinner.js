

import React from 'react';
import {CircularProgress} from '@material-ui/core';
import useStyles from '../styles/spinner';

export default function () {
	const classes = useStyles();
	return (
		<div className={classes.spinner}><CircularProgress color="primary"/></div>
	);
}
