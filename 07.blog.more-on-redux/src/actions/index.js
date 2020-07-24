import _ from 'lodash';
import jsonPlacerholder from '../apis/jsonPlacerholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // Get an array of unique userId
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlacerholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlacerholder.get(`/users/${userId}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
