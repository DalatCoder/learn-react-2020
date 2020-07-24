import jsonPlacerholder from '../apis/jsonPlacerholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlacerholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
