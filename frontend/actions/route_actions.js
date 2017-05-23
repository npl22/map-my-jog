import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createRoute = route => dispatch => (
  APIUtil.signup(route).then(routeResponse => (
    dispatch(receiveRoute(routeResponse))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
