import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {useStyles} from './show';

function createData(name, calories,) {
    return { name, calories  };
}

const rows = [
    createData('密文', 'afnladjfojd23df'),
    createData('帐号', '1234567'),
    createData('姓名', '张三'),
    createData('性别', '男'),
    createData('住址', 1037),
];

export const Show = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableContainer className={classes.tablecontainer} component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead className={classes.tablehead} >
                        <TableRow className={classes.tablehead}>
                            <TableCell>键</TableCell>
                            <TableCell align="left">值</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}