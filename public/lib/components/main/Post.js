import React, { Component } from 'react';
import DeletePost from './DeletePost.js'
const Post = ({ post, index } )  => {
  return (
    <li>
      {post.text}
      <DeletePost index={index} />
    </li>
  );
};

export default Post;
