import {NOTIFICATION, FETCHNOTIFICATION} from './ActionTypes';
const url = 'http://192.168.0.105:5002/';
export const onNotification = () => async dispatch => {
  dispatch({type: NOTIFICATION});
};
export const fetchNotification = data => async dispatch => {
  var result = await fetch(url + 'booking/findmynotification', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json());

  dispatch({type: FETCHNOTIFICATION, payload: result.data});

  storeData2(result, dispatch);
  return result;
};
