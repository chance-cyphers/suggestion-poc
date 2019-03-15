import {initializeSearchState, SearchState} from './search.state';
import {All, DOWN_ARROW, KEY_TYPED, MOUSE_OVER_SUGGESTION, RECEIVE_SUGGESTIONS, SELECT_FILTER, UP_ARROW} from './search.action';

type Action = All;

const defaultState: SearchState = {
  ...initializeSearchState()
};

export function searchReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case UP_ARROW:
      return {
        ...state,
        selectionIndex: state.selectionIndex > -1 ? state.selectionIndex - 1 : state.selectionIndex
      };

    case DOWN_ARROW:
      return {
        ...state,
        selectionIndex: state.selectionIndex < state.suggestions.length - 1 ? state.selectionIndex + 1 : state.selectionIndex
      };

    case MOUSE_OVER_SUGGESTION:
      return {
        ...state,
        selectionIndex: action.index
      };

    case RECEIVE_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.suggestions
      };

    case SELECT_FILTER:
      if (state.selectionIndex < 0 || state.filters.includes(state.suggestions[state.selectionIndex])) {
        return state;
      }
      return {
        ...state,
        filters: [...state.filters, state.suggestions[state.selectionIndex]]
      };

    default:
      return {
        ...state,
        words: state.words + '.',
      };
  }

}
