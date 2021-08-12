import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // response.data is the users
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchUsersFailure(error.message));
    });
};
