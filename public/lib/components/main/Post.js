import React, { Component } from 'react';
import DeletePost from './DeletePost.js';
import EditPost from './EditPost.js';

const Post = ({ post, index } )  => {
  return (
    <li>
      {post.text}
      <DeletePost index={index} />
      <EditPost index={index} />
    </li>
  );
};

export default Post;
