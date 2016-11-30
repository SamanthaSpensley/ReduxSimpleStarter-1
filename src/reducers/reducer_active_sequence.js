// state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  // if the action type is 'SEQUENCE_SELECTED', then return the action's payload (selected sequence)
  switch(action.type) {
  case 'SEQUENCE_SELECTED':
    return action.payload;
  }

  // if don't care about the action (not 'SEQUENCE_SELECTED')
  return state;
}
