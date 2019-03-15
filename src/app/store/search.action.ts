import {Action} from '@ngrx/store';

export const KEY_TYPED = '[search] KEY_TYPED';

export class KeyTyped implements Action {
  readonly type = KEY_TYPED;
}

export type All = KeyTyped;
