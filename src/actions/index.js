export function selectSequence(sequence) {
  // selectSequence is an action creator and needs to return an action (an object with a 'type' property)
  return {
    type: 'SEQUENCE_SELECTED',
    payload: sequence
  };
}
