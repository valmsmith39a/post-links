import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  userPosts: PostsReducer
});

export default rootReducer;
