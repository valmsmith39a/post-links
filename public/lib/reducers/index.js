import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  userPostsAll: PostsReducer
});

export default rootReducer;
