import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../Reducers/index';
import thunk from 'redux-thunk';
const initialState={};
const thunkMiddleware =[thunk];
const store = createStore(rootReducer,initialState, applyMiddleware(...thunkMiddleware ));
export default store;
