import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';

const GET_POSTS_URL = '/weblinks';

export function getAllPosts() {
  const request = axios.get('/weblinks');

  return {
    type: GET_POSTS,
    payload: request
  };
}
