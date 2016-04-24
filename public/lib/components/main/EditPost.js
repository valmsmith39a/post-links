import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {
  render() {
    return (
      <button>Edit</button>
    );
  }
}

export default connect(null, null)(EditPost);
