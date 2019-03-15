import {Action} from '@ngrx/store';

export const KEY_TYPED = '[search] KEY_TYPED';
export const RECEIVE_SUGGESTIONS = '[search] RECEIVE_SUGGESTIONS';

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

export type All = KeyTyped | ReceiveSuggestions;
