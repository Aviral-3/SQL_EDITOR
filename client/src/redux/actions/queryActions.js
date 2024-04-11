// Action Types
export const SET_CURRENT_DATABASE = 'SET_CURRENT_DATABASE';
export const EXECUTE_QUERY_SUCCESS = 'EXECUTE_QUERY_SUCCESS';
export const EXECUTE_QUERY_FAILURE = 'EXECUTE_QUERY_FAILURE';

// Action Creators
export const setCurrentDatabase = (database) => ({
  type: SET_CURRENT_DATABASE,
  payload: { database },
});

export const executeQuerySuccess = (results) => ({
  type: EXECUTE_QUERY_SUCCESS,
  payload: { results },
});

export const executeQueryFailure = (error) => ({
  type: EXECUTE_QUERY_FAILURE,
  payload: { error },
});

export const executeQuery = (database, query) => {
  return (dispatch, getState) => {
    console.log(`Executing query on ${database}: ${query}`);

    setTimeout(() => {
      const fakeResults = { columns: ['id', 'name'], rows: [[1, 'Test']] };
      dispatch(executeQuerySuccess(fakeResults));
    }, 1000);

  };
};

