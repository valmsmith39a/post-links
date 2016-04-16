import {
  GET_ALL_POSTS,
  CREATE_POST,
  DELETE_POST
} from '../actions/PostActions';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_POST:
      return [ ...state, action.payload.data ];
    case GET_ALL_POSTS:
      return action.payload.data;
    case DELETE_POST:
      //let index = action.payload.data.index;
      console.log('delete array is: ', [...state.slice(0,1), ...state.slice(2)]);
      return [...state.slice(0,1), ...state.slice(2)];
    default:
      return state;
  }
}
