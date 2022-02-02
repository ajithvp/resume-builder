import * as actionTypes from "./constants";

const saveResume = (resume) => {
    return async dispatch => {
        try {
            dispatch({ type: actionTypes.SAVE_RESUME, resume: resume });
        } catch (e) {
            console.log(e);
        }
    };
};


export default saveResume;