import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import HeadOfTable from '../../Components/UI/HeadOfTable/HeadOfTable';
import DeleteIcons from '../../Components/UI/DeleteIcons/DeleteIcons';
import EditIcons from '../../Components/UI/EditIcon/EditIcon';
import Spinner from '../../Components/UI/Spinner/Spinner';

function AllContact(props) {

    useEffect(() => {
        props.onFetch()
    }, []);

    let myProjects = [];
    for (const property in props.data) {
        myProjects.push(props.data[property])
    }

    return (
        <div>
            <TableContainer>
                <Table aria-label="simple table">
                    <HeadOfTable one="ID" two="Name" three="Number" four="Email" five="Action" />
                    <TableBody>
                        {
                            props.data ?
                                Object.keys(props.data).map(id => {
                                    return (
                                        <TableRow key={id}>
                                            <TableCell component="th" scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell align="right">{props.data[id].name || 'Not available'}</TableCell>
                                            <TableCell align="right">{props.data[id].number || 'Not available'}</TableCell>
                                            <TableCell align="right">{props.data[id].email || 'Not available'}</TableCell>
                                            <TableCell align="right">
                                                <EditIcons id={id} />
                                                <DeleteIcons id={id} />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                                : <h1>No Contacts</h1>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.contacts.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetch: () => dispatch(actions.fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllContact)
