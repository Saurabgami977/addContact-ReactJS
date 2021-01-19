import axios from '../../axios';
import * as actionTypes from '../actionTypes';

export const saveData = data => {
    return {
        type: actionTypes.FETCH_CONTACTS,
        data: data
    }
}

export const fetchStatus = () => {
    return {
        type: actionTypes.FETCHING_DATA
    }
}

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchStatus())
        axios.get('/contacts.json')
            .then(res => {
                dispatch(saveData(res.data))
                dispatch(fetchStatus())
            })
            .catch(err => alert(err))
    }
}