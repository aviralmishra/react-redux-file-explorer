import {FETCH_FILE} from '../actions/FileActions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FILE:
      return action.payload;
    default:
      return state;
  }
}
