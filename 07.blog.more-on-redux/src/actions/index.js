import jsonPlacerholder from '../apis/jsonPlacerholder';

export const fetchPostsAndUsers = () => async dispatch => {
  await dispatch(fetchPosts());
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlacerholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlacerholder.get(`/users/${userId}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
