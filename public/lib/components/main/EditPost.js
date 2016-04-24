import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions/PostActions';

class EditPost extends Component {
  onClick() {
    console.log('in edit click');
    this.props.editPost(this.props.index)
     .then(response => {
       console.log('response in edit is: ', response);
     })
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}>Edit</button>
    );
  }
}

export default connect(null, { editPost })(EditPost);
