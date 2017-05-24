import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const receiveRouteErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

export const createRoute = route => dispatch => {
  return (
    RouteAPIUtil.createRoute(route).then(routeResponse => (
      dispatch(receiveRoute(routeResponse))
    ), err => (
      dispatch(receiveRouteErrors(err.responseJSON))
    ))
  );
};
