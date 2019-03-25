import axios from 'axios';
import { history } from '../index';

export const actionTypes = {
    CLEAR_SELECTED: 'CLEAR_SELECTED',
    GET_COMMENT: 'GET_COMMENT',
    FETCH_COMMENTS: 'FETCH_COMMENTS',
    ADD_COMMENT: 'ADD_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT',
    EDIT_COMMENT: 'EDIT_COMMENT',
};

export const fetchComments = comments => ({
    type: actionTypes.FETCH_COMMENTS,
    comments,
});

export const fetchCommentsAsync = () => (dispatch) => {
    axios.get('http://comments.stage.itsvit.org/api/comments')
        .then((response) => {
            dispatch(fetchComments(response.data));
        })
        .catch(error => error);
};

export const clearSelected = () => ({
  type: actionTypes.CLEAR_SELECTED,
});

export const getComment = (comment) => ({
  type: actionTypes.GET_COMMENT,
  comment,
});

export const getCommentAsync = (idComment) => (dispatch) => {
  axios.get(`http://comments.stage.itsvit.org/api/comments/${idComment}`)
        .then((response) => {
          dispatch(getComment(response.data));
        })
      .catch(error => error);
};

export const addComment = (comment) => (dispatch) => {
    axios.post('http://comments.stage.itsvit.org/api/comments', {
        author: comment.author,
        text: comment.text
    })
        .then(() => {
          history.push('/');
          dispatch(fetchCommentsAsync());
        })
        .catch(error => error);
};

export const editComment = (comment) => (dispatch) => {
    const { id, author, text } = comment;

    axios.put(`http://comments.stage.itsvit.org/api/comments/${id}`, {
        author,
        text,
    })
        .then(() => {
            dispatch(fetchCommentsAsync());
        })
        .catch(error => error);
};

export const deleteComment = id => (dispatch) => {
    axios.delete(`http://comments.stage.itsvit.org/api/comments/${id}`)
        .then(() => {
          history.push('/');
          dispatch(clearSelected());
          dispatch(fetchCommentsAsync());
        })
        .catch(error => error);
};