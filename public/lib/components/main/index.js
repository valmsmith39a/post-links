import React, { Component } from 'react';
import DisplayWeblinks from './DisplayWeblinks';

export default class MainPage extends Component {
  componentWillMount() {

  }

  render() {
    return(
      <div>
        <div>Main Page</div>
        <DisplayWeblinks />
      </div>
    );
  }
}
