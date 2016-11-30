import React, { Component } from 'react';
// react-redux is the glue between the two libraries; makes "connect" function available
import { connect } from 'react-redux';
import { selectSequence } from '../actions/index';
import { bindActionCreators } from 'redux';

class SequenceList extends Component {
  renderList() {
    return this.props.sequences.map((sequence) => {
      return (
        <li
          key={sequence.title}
          onClick={() => this.props.selectSequence(sequence)}
          className="list-group-item">
          {sequence.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// takes application state and whatever is returned will show up as props into of BookList
function mapStateToProps(state) {
  return {
    sequences: state.sequences
  };
}

// anything returned from this function will end up as props on the SequenceList container
function mapDispatchToProps(dispatch) {
  // whenever selectSequence is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectSequence: selectSequence }, dispatch)
}

// promote SequenceList from a component to a container - it needs to know about this new dispatch method, selectSequence. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(SequenceList);
