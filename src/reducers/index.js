import { combineReducers } from 'redux';
import SequencesReducer from './reducer_sequences';
import ActiveSequence from './reducer_active_sequence';

// mapping of our application state
const rootReducer = combineReducers({
  // pieces of state
  sequences: SequencesReducer,
  activeSequence: ActiveSequence
});

export default rootReducer;
