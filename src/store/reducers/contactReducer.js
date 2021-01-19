import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    data: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_DATA:
            return {
                ...state,
                loading: !state.loading
            }
        case actionTypes.FETCH_CONTACTS:
            return {
                ...state,
                data: action.data
            }
        default: return state
    }
}

export default reducer;