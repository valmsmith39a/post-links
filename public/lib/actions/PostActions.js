import axios from 'axios';

export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

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

export function deletePost(index) {
  const request = axios.delete(`/weblinks/${index}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}

export function editPost(index, postObject) {
  const request = axios.put(`/weblinks/${index}`, postObject);

  return {
    type: EDIT_POST,
    payload: request
  }
}
