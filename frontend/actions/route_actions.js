import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const receiveRoutes = route => ({
  type: RECEIVE_ROUTES,
  route
});

export const receiveRouteErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
});

export const fetchRoutes = () => dispatch => {
  return (
    RouteAPIUtil.fetchRoutes().then(ajaxResponse => (
      dispatch(fetchRoutes(ajaxResponse))
    ))
  );
};

export const createRoute = route => dispatch => {
  return (
    RouteAPIUtil.createRoute(route).then(ajaxResponse => (
      dispatch(receiveRoute(ajaxResponse))
    ), err => (
      dispatch(receiveRouteErrors(err.responseJSON))
    ))
  );
};
