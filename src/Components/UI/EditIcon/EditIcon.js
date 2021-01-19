import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index'

function EditIcons(props) {

    const clickHandler = () => {
        props.history.push('/add-contact');
        props.onEdit(props.id);
    }
    return (
        <EditIcon
            onClick={() => clickHandler()}
            style={{ cursor: 'pointer' }}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onEdit: (id) => dispatch(actions.setEditId(id))
    }
}


export default connect(null, mapDispatchToProps)(withRouter(EditIcons))
