import merge from 'lodash/merge';

import {
  RECEIVE_ROUTE,
  RECEIVE_ROUTE_ERRORS
} from '../actions/route_actions';

const initialState = Object.freeze({
  title: "",
  waypoints: [],
  user_id: null,
  errors: []
});

const routeReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTE:
      window.action = action;
      const route = action.route;
      route.waypoints = JSON.parse(route.waypoints);
      return merge({}, state, route);
    case RECEIVE_ROUTE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default routeReducer;
