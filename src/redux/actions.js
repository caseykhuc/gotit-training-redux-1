// remove

export const actionTypes = {
  REMOVE_POST: 'REMOVE_POST',
  ADD_POST: 'ADD_POST',
  ADD_COMMENT: 'ADD_COMMENT',
};

export const removePost = (id) => ({ type: actionTypes.REMOVE_POST, id });

export const addPost = (post) => ({ type: actionTypes.ADD_POST, post });

export const addComment = (comment, postId) => ({
  type: actionTypes.ADD_COMMENT,
  comment,
  postId,
});
