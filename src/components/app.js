import React, { Component } from 'react';

import SequenceList from '../containers/sequence_list';
import SequenceDetail from '../containers/sequence_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SequenceList />
        <SequenceDetail />
      </div>
    );
  }
}
