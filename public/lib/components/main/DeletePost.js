// Delete post by...
// Remove the post from the array/reducers
// Remove from reducers and update Post
// Action to remove reducer
// Server side route
// Make class component for now
// Try to make functional component

import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';

class DeletePost extends React.Component {
  onClick() {
    this.props.deletePost()
      .then(response => {
        console.log('response: ', response);
      });
  }

  render() {
    return(
      <button onClick={this.onClick.bind(this)}>Delete</button>
    );
  }
}

export default connect(null, { deletePost })(DeletePost);
