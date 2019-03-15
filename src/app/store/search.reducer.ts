import {initializeSearchState, SearchState} from './search.state';
import {All, KEY_TYPED, RECEIVE_SUGGESTIONS} from './search.action';

type Action = All;

const defaultState: SearchState = {
  ...initializeSearchState()
};

export function searchReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case KEY_TYPED:
      return state;

    case RECEIVE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions
      };

    default:
      return {
        ...state,
        words: state.words + '.',
      };
  }

}
