import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ToolBar from '../Components/Toolbar';
import moment from 'moment';


const Table = () => {

    let [rows, setRows] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'registrationdate', headerName: 'Date of registration', width: 200 },
        { field: 'lastLog', headerName: 'Last seen', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
    ]
    
    useEffect(() => 
        fetch("/api/users")
        .then(response => response.json())
        .then(data => setRows(Object.values(data).map(item => {
            item.registrationdate = moment(item.registrationdate).format("D MMM YY HH:mm");
            item.lastLog = moment(item.lastLog).format("D MMM YY HH:mm");
            return item;
        })))
    , [])

    return (
        <>
            <h1 align='center'>Users</h1>

            <ToolBar/>

            <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={20} checkboxSelection onSelectionChange={e => console.log(e.rows)}/>
            </div>
        </>
    )
}

export default Table;