import React, { Component } from 'react';
import { connect } from 'react-redux';

class SequenceDetail extends Component {
  render() {
    if (!this.props.sequence) {
      return <div>Select a sequence to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Sequence: {this.props.sequence.title}</div>
        <div>Duration: {this.props.sequence.duration} minutes</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sequence: state.activeSequence
  };
}

export default connect(mapStateToProps)(SequenceDetail);
