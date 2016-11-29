import { combineReducers } from 'redux';
import SequencesReducer from './reducer_sequences';

// mapping of our application state
const rootReducer = combineReducers({
  // pieces of state
  sequences: SequencesReducer
});

export default rootReducer;
