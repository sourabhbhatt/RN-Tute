import axios from 'axios';
export const appUrls = {
  login: 'https://reqres.in/api/login',
  register: 'https://reqres.in/api/register',
  posts: 'https://jsonplaceholder.typicode.com/posts/1',
};

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};
// static api calls

export const getPosts = () => {
  return fetch(appUrls.posts, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .then(json => json);
};

export const updatePosts = body => {
  return axios.put(appUrls.posts, body).then(response => response.data);
};
