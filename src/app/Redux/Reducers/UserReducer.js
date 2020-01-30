import { USERUPLOAD, USERDETAILS, GETUPLOADS,AUTH, LOGIN } from '../Actions/ActionTypes';
const initialState = {
    user: [],
    auth:null
}

export default function (state = initialState, action) {
    const { type, payload } = action
   
    switch (type) {
        case USERDETAILS:
            return {
                ...state,
                cabs: payload.data,
            };
        case GETUPLOADS:
            return {
                ...state,
                user: payload,
            };
        case USERUPLOAD:
            return {
                ...state,
            };
            case AUTH:
            return {
                ...state,
                auth:payload
            };
            case LOGIN:
                return {
                    ...state,
                    user:payload
                };
        default:
            return state;
    }
}