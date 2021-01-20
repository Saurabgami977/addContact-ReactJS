import * as actionTypes from '../actionTypes';
import axios from '../../axios';

export const saveFormSuccess = () => {
    return {
        type: actionTypes.SUBMIT_FORM
    }
}


export const submitForm = (data) => {
    console.log(data, '[submit]')
    return dispatch => {
        dispatch(saveFormSuccess())
        let url = data.id !== null ? `/contacts/${data.id}.json` : '/contacts.json';
        axios.post(url, data)
            .then(res => {
                dispatch(saveFormSuccess())
                console.log(res)
            })
            .catch(err => {
                alert(err)
            })
    }
}

