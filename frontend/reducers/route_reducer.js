import merge from 'lodash/merge';

import {
  RECEIVE_ROUTE,
  RECEIVE_ERRORS
} from '../actions/session_actions';

// const initialState = Object.freeze({
//   title: "",
//   waypoints: [],
//   user_id: null,
//   errors: []
// });

const routeReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTE:
      const route = action;
      route.user_id = state.session.currentUser.id;
      return merge({}, state, route);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default routeReducer;
