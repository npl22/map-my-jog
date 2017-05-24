import { connect } from 'react-redux';

import CreateRoute from './create_route';
import { createRoute } from '../../actions/route_actions';

const mapStateToProps = (state) => ({
  session: state.session,
  routes: state.routes
});

const mapDispatchToProps = dispatch => ({
  createRoute: (route) => dispatch(createRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);
