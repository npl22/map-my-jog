import { connect } from 'react-redux';
import CreateRoute from './create_route';
import { logout } from '../../actions/session_actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);
