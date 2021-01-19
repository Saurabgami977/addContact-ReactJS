import * as actionTypes from '../actionTypes';
import axios from '../../axios';

export const saveFormSuccess = () => {
    return {
        type: actionTypes.SUBMIT_FORM
    }
}


export const submitForm = (data) => {
    return dispatch => {
        dispatch(saveFormSuccess())
        axios.post(`/contacts.json`, data)
            .then(res => {
                dispatch(saveFormSuccess())
            })
            .catch(err => {
                alert(err)
            })
    }
}

