import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SplashPage from './splash_page';

const mapStateToProps = (state) => ({
  session: state.session
});
const mapDispatchToProps = (dispatch) => ({
  guestLogin: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);
