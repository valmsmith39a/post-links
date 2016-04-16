import React, { Component } from 'react';
import Delete from './DeletePost.js'
const Post = ({ post } )  => {
  return (
    <li>
      {post.text}
      <DeletePost />
    </li>
  );
};

export default Post;
