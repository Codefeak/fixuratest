import React, {useState} from 'react';
import {Grid, List, ListItem, ListItemText, Divider, Typography, Card, CardContent} from '@material-ui/core';

import RenderTable from './RenderTable';
import Spinner from './Spinner';
import {useStyles} from '../styles/profile';

export default function (props) {
    const {data} = props;
    const classes = useStyles();
    const [rowSelectedId, setRowSelectedId] = useState(null);
    
    const handleTableRowClick = id => {
		setRowSelectedId(id);
	};
    
    let component;
    if(data === undefined || data === null || data.length<0) {
        component = <Spinner/>
    } else {
        component = (
            <Grid item xs={12}>
                <Card className={classes.profileContainer}>
                    <CardContent>
                        <Typography className={classes.fieldTitle}>Personal Information</Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Name:")} secondary={secondaryText(`${data.firstName} ${data.lastName}`)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Email:")} secondary={secondaryText(data.emailAddress)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Date of Birth:")} secondary={secondaryText(formatDate(data.birthDate))}/>
                                    </ListItem>
                                </List>
                                </Grid>
                            <Grid item xs={6}>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Gender:")} secondary={secondaryText(data.gender)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Language:")} secondary={secondaryText(data.preferredLanguage)}/>
                                    </ListItem>
                                </List>
                            </Grid>   
                        </Grid>
                    </CardContent>
                </Card>
                <Divider/>
                <Card>
                <CardContent>
                        <Typography className={classes.fieldTitle}>Account Information</Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Id:")} secondary={secondaryText(data.id)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Creation Date:")} secondary={secondaryText(formatDate(data.creationDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Activation Date:")} secondary={secondaryText(formatDate(data.activationDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Approved Date:")} secondary={secondaryText(formatDate(data.approvedDate))}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Last Modified Date:")} secondary={secondaryText(formatDate(data.lastModifiedDate))}/>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={6}>
                                <List className={classes.list}>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Client Role:")} secondary={secondaryText(data.clientRole.encodedKey)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Encoded Key:")} secondary={secondaryText(data.encodedKey)}/>
                                    </ListItem> 
                                    <ListItem>
                                        <ListItemText primary={primaryText("Group Loan Cycle:")} secondary={secondaryText(data.groupLoanCycle)}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={primaryText("State:")} secondary={secondaryText(data.state)}/>
                                    </ListItem>
                                </List>
                            </Grid>   
                        </Grid>
                    </CardContent>
                </Card>
                <Divider/>
            </Grid>
        );
    }

    return  {
        ...component
    };

    function primaryText(string) {
        return <Typography variant="subtitle1">{string}</Typography>
    }

    function secondaryText(string) {
        return <Typography variant="body1" className={classes.fieldValue}>{string}</Typography>
    }

    function formatDate(date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-fi");
    }
}