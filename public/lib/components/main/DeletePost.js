import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';

class DeletePost extends React.Component {
  onClick() {
    this.props.deletePost(this.props.index)
      .then(response => {
        console.log('delete response: ', response);
      });
  }

  render() {
    return(
      <button onClick={this.onClick.bind(this)}>Delete</button>
    );
  }
}

export default connect(null, { deletePost })(DeletePost);
