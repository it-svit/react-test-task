import { connect } from 'react-redux';
import Comments from './Comments';
import { withRouter } from 'react-router-dom'
import { fetchCommentsAsync, getCommentAsync, deleteComment } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  fetchComments: () => dispatch(fetchCommentsAsync()),
  deleteComment: (id) => dispatch(deleteComment(id)),
  getComment: (id) => dispatch(getCommentAsync(id)),
});

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
  selectedComment: state.comments.selectedComment,
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments));
