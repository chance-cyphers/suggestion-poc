import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {KEY_TYPED, KeyTyped} from './search.action';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {SearchService} from '../search.service';

@Injectable()
export class SearchEffects {

  constructor(private http: HttpClient,
              private actions$: Actions,
              private searchService: SearchService) {
  }

  @Effect() getSuggestions = this.actions$.pipe(
    ofType<KeyTyped>(KEY_TYPED),
    map(action => {
      return action.term;
    }),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.searchService.searchEntries(term))
  );



}
