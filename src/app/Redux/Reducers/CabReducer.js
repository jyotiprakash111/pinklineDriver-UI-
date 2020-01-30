import { CABDETAILS, CABUPLOAD } from '../Actions/ActionTypes';
const initialState = {
    cabs: []
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case CABDETAILS:
            return {
                ...state,
                cabs: payload,

            };
        case CABUPLOAD:
            return {
                ...state,
            };
        default:
            return state;
    }
}
