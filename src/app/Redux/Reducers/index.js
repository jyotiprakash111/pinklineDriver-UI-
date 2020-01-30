import { combineReducers, createStore } from 'redux';
import user from './UserReducer';
import cabs from './CabReducer'
import notification from './NotificationReducer'
export default combineReducers({
    user,
    cabs,
    notification
})
// export const rootReducer = (state, action) => {
// 	return AppReducers(state,action);
// }



