import {initializeSearchState, SearchState} from './search.state';
import {All} from './search.action';

type Action = All;

const defaultState: SearchState = {
  ...initializeSearchState()
};

export function searchReducer(state = defaultState, action: Action) {
  console.log(state, action);

  return {
    ...state,
    words: state.words + '.',
  };
}
