import * as actionType from "./constants";
const initialState = {
    resume: {}
};

const resumeReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SAVE_RESUME:
            return { ...state, resume: action.resume };
        default:
            return state;
    }
};

export default resumeReducers;