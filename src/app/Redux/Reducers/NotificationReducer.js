import {NOTIFICATION,FETCHNOTIFICATION } from '../Actions/ActionTypes';
const initialState = {
    notification:false,
    notiDetails:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case NOTIFICATION:
            return {
                ...state,
                notification:true

            };
            case FETCHNOTIFICATION:
                return{
                    ...state,
                    notiDetails:payload
                }
        default:
            return state;
    }
}