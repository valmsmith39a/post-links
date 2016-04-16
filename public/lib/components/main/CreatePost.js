import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/PostActions'

class CreatePost extends Component {
  createPost() {
    const postObj= {
      text: this.refs.inputText.value
    }
    this.props.createPost(postObj)
    .then(response => {});
  }

  render() {
    return(
      <div>
        <input ref="inputText" type="text" />
        <button onClick={this.createPost.bind(this)}>POST</button>
      </div>
    );
  }
}

export default connect(null, { createPost })(CreatePost);
