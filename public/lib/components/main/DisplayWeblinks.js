import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllPosts } from '../../actions/PostActions';
import { createPost } from '../../actions/PostActions';
import Post from './Post';

class DisplayWeblinks extends Component {
  componentWillMount() {
    this.props.getAllPosts()
    .then(response => {});
  }

  renderPosts() {
    return this.props.userPosts.map((post, index) => (
      <Post key={index} post={post} />
    ));
  }

  render() {
    return (
      <div>DisplayWeblinks
        <ul>
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getAllPosts, createPost })(DisplayWeblinks);
