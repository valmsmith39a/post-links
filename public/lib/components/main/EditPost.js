import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
  onClick() {
    console.log('in edit click');
  }
  
  render() {
    return (
      <button onClick={this.onClick.bind(this)}>Edit</button>
    );
  }
}

export default connect(null, null)(EditPost);
