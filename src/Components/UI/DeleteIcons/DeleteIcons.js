import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

function DeleteIcons(props) {

    const deleteHandler = async (id) => {
        await props.onDelete(id)
        await props.onFetch()
    }

    return (
        <DeleteIcon
            onClick={() => deleteHandler(props.id)}
            style={{ cursor: 'pointer' }}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => dispatch(actions.deleteContact(id)),
        onFetch: () => dispatch(actions.fetchData())
    }
}


export default connect(null, mapDispatchToProps)(DeleteIcons)
