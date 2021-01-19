import * as actionTypes from '../actionTypes';

import axios from '../../axios';

export const toggleFavourite = () => {
    return {
        type: actionTypes.TOOGLE_FAVOURITE,
    }
}

export const setEditId = (id) => {
    return {
        type: actionTypes.EDIT_CONTACT,
        id: id
    }
}

export const deleteContact = (id) => {
    return dispatch => {
        axios.delete(`/contacts/${id}.json`)
            .then(res => console.log('Deleted'))
            .catch(err => console.log(err))
    }
}