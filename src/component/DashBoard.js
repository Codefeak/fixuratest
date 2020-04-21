import React, {useState} from 'react';
import {List, ListItem, ListItemText, Typography, Card, CardContent} from '@material-ui/core';

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
            <>
                <Card>
                    <CardContent>
                        <Typography>Personal Information</Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Name" secondary={`${data.firstName} ${data.lastName}`}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={data.emailAddress}/>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </>
        );
    }

    return  {
        ...component
    };

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