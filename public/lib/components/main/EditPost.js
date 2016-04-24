import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions/PostActions';

class EditPost extends Component {
  onClick() {
    var testEditPost = {
      text:"EDITED POST TEST"
    }
    this.props.editPost(this.props.index, testEditPost)
     .then(response => {
       console.log('response in edit is: ', response);
     });
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>Edit</button>
    );
  }
}

export default connect(null, { editPost })(EditPost);
