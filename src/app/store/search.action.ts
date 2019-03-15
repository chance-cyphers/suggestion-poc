import {Action} from '@ngrx/store';

export const KEY_TYPED = '[search] KEY_TYPED';
export const RECEIVE_SUGGESTIONS = '[search] RECEIVE_SUGGESTIONS';
export const UP_ARROW = '[search] UP_ARROW';
export const DOWN_ARROW = '[search] DOWN_ARROW';
export const MOUSE_OVER_SUGGESTION = '[search] MOUSE_OVER_SUGGESTION';
export const SELECT_FILTER = '[search] SELECT_FILTER';

export class KeyTyped implements Action {
  readonly type = KEY_TYPED;

  constructor(public term: string) {
  }
}

export class ReceiveSuggestions implements Action {
  readonly type = RECEIVE_SUGGESTIONS;

  constructor(public suggestions: string[]) {
  }
}

export class UpArrow implements Action {
  readonly type = UP_ARROW;
}

export class DownArrow implements Action {
  readonly type = DOWN_ARROW;
}

export class MouseOverSuggestion implements Action {
  readonly type = MOUSE_OVER_SUGGESTION;

  constructor(public index: number) {
  }
}

export class SelectFilter implements Action {
  readonly type = SELECT_FILTER;
}

export type All = KeyTyped
  | ReceiveSuggestions
  | UpArrow
  | DownArrow
  | MouseOverSuggestion
  | SelectFilter;
