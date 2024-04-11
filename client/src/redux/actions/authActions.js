export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';


export const loginSuccess = (userInfo) => ({
  type: LOGIN_SUCCESS,
  payload: { userInfo },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (username, password) => {
  return (dispatch) => {
    setTimeout(() => {
      if (username === 'test' && password === 'password') {
        dispatch(loginSuccess({ username }));
      } else {
        dispatch(loginFailure('Invalid username or password'));
      }
    }, 1000);
  };
};
