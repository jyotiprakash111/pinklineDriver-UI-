import {
  CABDETAILS,
  CABUPLOAD,
  GETUPLOADS,
  AUTH,
  Login,
  LOGIN,
} from './ActionTypes';
import AsyncStorage from '@react-native-community/async-storage';
const url = 'http://192.168.0.105:5002/';

export const login = data => async dispatch => {
  console.log('testing=================');
  var result = await fetch(url + 'loginwithphone', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

  dispatch({ type: LOGIN, payload: result.data });

  storeData2(result, dispatch);
  return result;
};
export const editProfile = data => async dispatch => {
  console.log('testing=================');
  var result = await fetch(url + 'editprofile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

  dispatch({ type: LOGIN, payload: result.data });

  storeData2(result, dispatch);
  return result;
};
export const userUpload = data => async dispatch => {
  // alert(JSON.stringify(data))
  var result = await fetch(url + 'register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  dispatch({ type: GETUPLOADS, payload: result.data });
  storeData(result);
  return result
};
//7377000535
storeData = async id => {
  if (id.message === 'registered') {
    try {
      await AsyncStorage.setItem('@login', id.data._id);
    } catch (e) {
      // saving error
    }
  } else {
    alert('email already exists');
  }
};
storeData2 = async (id, dispatch) => {
  if (id.message === 'Success') {
    try {
      await AsyncStorage.setItem('@login', id.id);
    } catch (e) {
      // saving error
    }
  } else {
    alert('user not present');
  }
};
export const fetchUser = data => async dispatch => {
  // alert(JSON.stringify(data))
  var result = await fetch(url + 'fetchuserprofile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  dispatch({ type: GETUPLOADS, payload: result.data });
  return result
};

export const CabDetails = (data) => async dispatch => {
  var result = await fetch(url + 'cabs/fetchmycab', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  dispatch({ type: CABDETAILS, payload: result.data });
};

export const CabUpload = data => async dispatch => {
  var result = await fetch(url + 'cabs/addcabs', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());
  dispatch({ type: CABUPLOAD, payload: result.data });
};
