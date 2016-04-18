import React, { Component } from 'react';
import DisplayWeblinks from './DisplayWeblinks';
import CreatePost from './CreatePost';

export default class MainPage extends Component {
  render() {
    return(
      <div>
        <CreatePost />
        <DisplayWeblinks />
      </div>
    );
  }
}
