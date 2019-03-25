import { connect } from 'react-redux';
import Comment from './Comment';
import { getCommentAsync, clearSelected, deleteComment, editComment } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  getComment: (id) => dispatch(getCommentAsync(id)),
  editComment: (data) => dispatch(editComment(data)),
  deleteComment: (id) => dispatch(deleteComment(id)),
  clearSelected: () => dispatch(clearSelected()),
});

const mapStateToProps = (state) => ({
  selectedComment: state.comments.selectedComment,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
