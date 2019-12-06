import { actionTypes } from './actions';
import { combineReducers } from 'redux';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    // removePhoto
    case actionTypes.REMOVE_POST:
      return state.filter((post) => post.id !== action.id);

    case actionTypes.ADD_POST:
      return [...state, action.post];

    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      console.log(action);
      const comments = state[action.postId] || [];
      return { ...state, [action.postId]: [...comments, action.comment] };
    default:
      return state;
  }
};

export default combineReducers({
  posts: postReducer,
  comments: commentReducer,
});
