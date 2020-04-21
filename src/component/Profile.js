import React, {useState} from 'react';
import {Grid, List, ListItem, ListItemText, Divider, Typography, Card, CardContent} from '@material-ui/core';

import RenderTable from './RenderTable';
import Spinner from './Spinner';
import {useStyles} from '../styles/profile';

export default function (props) {
    const {data} = props;
    console.log(data)
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
                                <List>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Name:")} secondary={secondaryText(`${data.firstName} ${data.lastName}`)}/>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Email:")} secondary={secondaryText(data.emailAddress)}/>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Date of Birth:")} secondary={secondaryText(formatDate(data.birthDate))}/>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Gender:")} secondary={secondaryText(data.gender)}/>
                                    </ListItem><Divider/>
                                    <ListItem>
                                        <ListItemText primary={primaryText("Language:")} secondary={secondaryText(data.preferredLanguage)}/>
                                    </ListItem>
                                </List>
                            </Grid>   
                        </Grid>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </Grid>
        );
    }

    return  {
        ...component
    };

    function primaryText(string) {
        return <Typography variant="title">{string}</Typography>
    }

    function secondaryText(string) {
        return <Typography variant="body1" className={classes.fieldValue}>{string}</Typography>
    }

    function formatDate(date) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("en-fi");
    }

    function renderAll() {
       return <List container>
                {Object.keys(data).map(item => {
                    console.log(typeof data[item])
                    if (typeof data[item] === 'object') {
                        return (
                            Object.keys(data[item]).map(key => {
                                return (
                                    <ListItem key={key}>
                                        <Typography>{`${item} ${key}`}: </Typography>
                                        <Typography>{data[item][key]}</Typography>
                                    </ListItem>
                                )
                            })
                        )
                    } else {
                        return (
                            <ListItem key={item}>
                                {console.log(data)}
                                <Typography>{item}: </Typography>
                                <Typography>{data[item]}</Typography>
                            </ListItem>
                        )
                    }
                })}
            </List>
    }
}