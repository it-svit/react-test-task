import { actionTypes } from '../actions';

const initialState = {
  comments: [],
  selectedComment: {},
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.FETCH_COMMENTS):
      const comments = Object.values(action.comments)
        .filter((comment) => comment.constructor === Object);

      return {
        ...state,
        comments,
      };

    case (actionTypes.GET_COMMENT):
      return {
        ...state,
          selectedComment: action.comment,
      };

      case (actionTypes.CLEAR_SELECTED):
      return {
        ...state,
        selectedComment: {},
      };

    default:
      return state;
  }
};

export default comments;