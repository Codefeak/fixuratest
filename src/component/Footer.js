import React from 'react';
import {Paper, AppBar, Link, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {useStyles} from '../styles/header';

export default function () {
    const classes = useStyles();
    const container = (
        <Paper>
            <AppBar position="static" className={`${classes.appBar} ${classes.footer}`}>
                <Link href="https://github.com/codefeak" rel="noopener">
                    <Button>
                        <GitHubIcon/>
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/rojak-amatya-83bb85145/" rel="noopener">
                    <Button>
                        <LinkedInIcon/>
                    </Button>
                </Link>
            </AppBar>
        </Paper>
    );

    return {
        ...container
    }
}