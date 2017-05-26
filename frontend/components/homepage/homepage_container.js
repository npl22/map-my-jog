import { connect } from 'react-redux';

import { fetchRoutes } from '../../actions/route_actions';
import { routesArray } from '../../reducers/selectors';
import Homepage from './homepage';

const mapStateToProps = (state) => ({
  routes: routesArray(state.routes)
});

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
