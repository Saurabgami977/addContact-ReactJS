import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBMIT_FORM:
            return {
                loading: !state.loading
            }
        default: return state
    }
}

export default reducer;