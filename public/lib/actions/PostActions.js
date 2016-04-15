import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';

const GET_POSTS_URL = '/weblinks';

export function getAllPosts() {
  const request = axios.get('/weblinks');

  return {
    type: GET_ALL_POSTS,
    payload: request
  };
}

export function createPost(post) {
  const request = axios.post('/weblinks', post);

  return {
    type: CREATE_POST,
    payload: request
  }
}
