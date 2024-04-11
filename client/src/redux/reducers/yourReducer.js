const initialState = {
    // initial state
  };
  
  const yourReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'YOUR_ACTION_TYPE':
        return {
          ...state,
          // update state based on action
        };
      default:
        return state;
    }
  };
  
  export default yourReducer;
  