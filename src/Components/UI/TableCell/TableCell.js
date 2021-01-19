import { TableCell } from '@material-ui/core'
import React from 'react'

function TableHeading(props) {
    return (
        <div>
            <TableCell>{props.heading}</TableCell>
        </div>
    )
}

export default TableHeading
