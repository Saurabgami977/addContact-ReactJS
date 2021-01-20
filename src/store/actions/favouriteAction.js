import * as actionTypes from '../actionTypes';

import axios from '../../axios';

export const toggleFavourite = () => {
    return {
        type: actionTypes.TOOGLE_FAVOURITE,
    }
}

export const setEditData = (data, id) => {
    return {
        type: actionTypes.EDIT_CONTACT,
        data: data,
        id: id,
        isFav: data.isFavourite
    }
}

//fetching current edit data
export const fetchEditData = (id) => {
    return dispatch => {
        axios.get(`/contacts/${id}.json`)
            .then(res => {
                dispatch(setEditData(res.data, id))
            })
            .catch(err => console.log(err));
    }
}

export const deleteContact = (id) => {
    return dispatch => {
        axios.delete(`/contacts/${id}.json`)
            .then(res => console.log('Deleted'))
            .catch(err => console.log(err))
    }
}