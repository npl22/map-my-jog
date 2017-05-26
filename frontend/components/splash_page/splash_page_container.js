import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SplashPage from './splash_page';

const mapDispatchToProps = (dispatch) => ({
  guestLogin: (user) => () => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(SplashPage);
