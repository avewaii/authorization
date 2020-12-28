import React from 'react';
import {Tooltip, IconButton, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToolBar() {
  
    return (
        <div align='center'>
            <Tooltip title="Delete">
                <Button>Block</Button>
            </Tooltip>
            <Tooltip title="Delete">
                <Button>Unblock</Button>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}