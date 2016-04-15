import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function getAllWeblinks() {
  console.log('in getAllWeblinks()');
  const request = axios.get('/weblinks');

  // return {
  //   type: FETCH_POSTS,
  //   payload: null
  // };
}
