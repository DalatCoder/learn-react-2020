// Maintain a list of fetched posts
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;

    default:
      return state;
  }
};
