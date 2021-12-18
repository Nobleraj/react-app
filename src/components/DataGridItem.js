import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const inline_style = {
    'display': 'table-cell',
    'borderBottom': '1px solid rgba(224, 224, 224, 1)',
    'padding': '6px 24px 6px 16px'
};
const dateFormat = "Do ddd YYYY hh:mm:ss";

export const DataGridItem = (props) => {
    const record = props.record;
    const id = record.id;
    const name = record.name;
    const email = record.email;
    const date = moment.utc(record.date).format(dateFormat);
    return(
        <TableRow key={id}>
            <TableCell></TableCell>
            <TextField style={inline_style} value={id}></TextField>
            <div className="data-item-cell">{name}</div>
            <TextField style={inline_style} value={email}></TextField>
            <div className="data-item-cell">{date}</div>
        </TableRow>
    )
};

/*
<TableRow key={id}>
            <TableCell></TableCell>
            <TextField style={inline_style} value={id}></TextField>
            <div className="data-item-cell">{name}</div>
            <TextField style={inline_style} value={email}></TextField>
            <div className="data-item-cell">{date}</div>
        </TableRow>
*/        