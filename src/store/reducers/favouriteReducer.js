import * as actionTypes from '../actionTypes';

const initialState = {
    isFavourite: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_FAVOURITE:
            return {
                isFavourite: !state.isFavourite
            }
        default:
            return {
                state
            }

    }
}

export default reducer;