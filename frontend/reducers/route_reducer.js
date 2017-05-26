import merge from 'lodash/merge';

import {
  RECEIVE_ROUTE,
  RECEIVE_ROUTES,
  RECEIVE_ROUTE_ERRORS
} from '../actions/route_actions';

const initialState = Object.freeze({
  allRoutes: {
    1: { id: 1,
         title: "",
         waypoints: [],
         distance: 0,
         user_id: null,
       }
     },
    errors: []
});

const routeReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ROUTE:
      const route = action.route;
      route.waypoints = JSON.parse(route.waypoints);
      return merge({}, state, route);
    case RECEIVE_ROUTES:
      return merge({}, state, action.routes);
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
