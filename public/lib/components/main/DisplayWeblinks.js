import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAllPosts } from '../../actions/PostActions';

class DisplayWeblinks extends Component {
  componentWillMount() {
    this.props.getAllPosts()
    .then(response => {
      console.log('response from getAllPosts is: ', response);
    });
  }

  render() {
    return (
      <div>Hello from DisplayWeblinks</div>
    );
  }
}

function mapStateToProps(state) {
  return state.userPostsAll;
}

export default connect(mapStateToProps, { getAllPosts })(DisplayWeblinks);
