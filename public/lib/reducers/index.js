import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'; 

const rootReducer = combineReducers({
  postsReducer: PostsReducer
});

export default rootReducer; 