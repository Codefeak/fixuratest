import React, {useState} from 'react';
import {Paper} from '@material-ui/core';

import RenderTable from './RenderTable';
import Spinner from './Spinner';

export default function (props) {
    const {data} = props;
    const [rowSelectedId, setRowSelectedId] = useState(null);
    
    const handleTableRowClick = id => {
		setRowSelectedId(id);
	};
    
    let component;
    if(data === undefined || data === null || data.length<0) {
        component = <Spinner/>
    } else {
        const headRows = getHeadRows(data);
        console.log(headRows)
        component = (
            <Paper container>
                <RenderTable 
                    data={formatData(data)}
                    headRows={headRows}
                    rowSelectedId={rowSelectedId}
                    handleTableRowClick={handleTableRowClick}
                />
            </Paper>
        );
    }

    return  {
        ...component
    };

    function getHeadRows (data) {
        return Object.keys(data).map(key => (
             {id: key, label: key.toUpperCase()}
        ))          
    }
    function formatData (data) {
        return Object.entries(data).map((key, value) => ({[key]: value}))
    }
}