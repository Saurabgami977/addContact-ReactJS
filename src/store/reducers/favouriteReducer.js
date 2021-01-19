import * as actionTypes from '../actionTypes';

const initialState = {
    isFavourite: false,
    currentID: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOOGLE_FAVOURITE:
            return {
                ...state,
                isFavourite: !state.isFavourite
            }
        case actionTypes.EDIT_CONTACT:
            return {
                ...state,
                currentID: action.id
            }
        default:
            return {
                state
            }

    }
}

export default reducer;