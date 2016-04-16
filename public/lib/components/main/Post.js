import React, { Component } from 'react';

const Post = ({ post } )  => {
  return (
    <li>{post.text}</li>
  )
};

export default Post;
