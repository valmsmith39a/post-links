import {
  GET_ALL_POSTS,
  CREATE_POST
} from '../actions/PostActions';

const INITIAL_STATE = { posts: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_POST:
      const postsArr = state.posts;
      const newPostsArr = postsArr.concat([action.payload.data]);
      return { posts: newPostsArr };
    case GET_ALL_POSTS:
      return { posts: action.payload.data };
    default:
      return state;
  }
}
