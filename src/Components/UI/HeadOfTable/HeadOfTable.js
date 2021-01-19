import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

function HeadOfTable(props) {
    return (
        <TableHead>
            <TableRow>
                <TableCell >{props.one}</TableCell>
                <TableCell align="right">{props.two}</TableCell>
                <TableCell align="right">{props.three}</TableCell>
                <TableCell align="right">{props.four}</TableCell>
                <TableCell align="right">{props.five}</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default HeadOfTable
