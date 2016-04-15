import {
  FETCH_POSTS
} from '../actions/PostActions';

const INITIAL_STATE = { something:null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS: 
      return state; 
    default: 
      return state; 
  }
}