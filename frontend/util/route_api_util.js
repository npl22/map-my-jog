export const fetchRoutes = () => (
  $.ajax({ url: 'api/routes'})
);

export const createRoute = route => (
  $.ajax({
    method: 'POST',
    url: '/api/routes',
    data: route
  })
);
