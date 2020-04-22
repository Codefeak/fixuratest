import React, {useState} from 'react';
import {Paper} from '@material-ui/core';

import RenderTable from './RenderTable';
import Spinner from './Spinner';
import {useStyles} from '../styles/investmentList'; 

export default function (props) {
    const {data, history} = props;
    const classes = useStyles();
    
    const handleTableRowClick = id => {
        history.push(`/investment/${id}`)
	};
    
    let component;
    if(data === undefined || data === null || data.length<0) {
        component = <Spinner/>
    } else {
        const headRows = getHeadRows(data);
        component = (
            <Paper container>
                <RenderTable 
                    data={filterData(data)}
                    headRows={headRows}
                    classes={classes}
                    handleTableRowClick={handleTableRowClick}
                />
            </Paper>
        );
    }

    return  {
        ...component
    };

    function getHeadRows (data) {
         return [
             {id: 'name', label: 'Name'},
             {id: 'accountType', label: 'Account type'},
             {id: 'availableBalance', label: 'Available Balance'},
             {id: 'holdBalance', label: 'Hold Balance'},
             {id: 'lockedBalance', label: 'Locked Balance'},
             {id: 'accountState', label: 'Account State'}

         ]
    }

    function filterData (data) {
        const keyArray = ["id", "name", "accountType", "availableBalance", "holdBalance", "lockedBalance", "accountState"];
        return data.map(item => {
            return Object.entries(item).reduce((acc, [key, value]) => {
                if(keyArray.includes(key)) {
                    acc = {...acc, [key]: value}
                }
                return acc;
            }, {})
        })
    }
    
}