import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
