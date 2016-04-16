import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllPosts } from '../../actions/PostActions';
import { createPost } from '../../actions/PostActions';
import Post from './Post';

class DisplayWeblinks extends Component {
  componentWillMount() {
    this.props.getAllPosts()
    .then(response => {
      this.render();
    });
  }

  createPost() {
    const postObj= {
      text: this.refs.inputText.value
    }
    this.props.createPost(postObj)
    .then(response => {
      console.log('response in createPost: ', response);
    });
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return <Post post={post} />
    });
  }

  render() {
    return (
      <div>Hello from DisplayWeblinks
        <input ref="inputText" type="text" />
        <button onClick={this.createPost.bind(this)}>POST</button>
        <ul>
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.userPosts;
}

export default connect(mapStateToProps, { getAllPosts, createPost })(DisplayWeblinks);
