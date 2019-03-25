import { connect } from 'react-redux';
import NewComment from './NewComment';
import { addComment } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  addComment: (data) => dispatch(addComment(data)),
});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
