import {
  GET_POSTS
} from '../actions/PostActions';

const INITIAL_STATE = { weblinks: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_POSTS:
      return { weblinks: action.payload.data };
    default:
      return state;
  }
}
