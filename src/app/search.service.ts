import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './SearchResult';
import {BankAccount} from './BankAccount';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(terms: Observable<string>): Observable<string[]> {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchEntries(term))
    );
  }

  searchEntries(term): Observable<string[]> {
    return this.http
      .post<SearchResult>('http://localhost:9200/person/peeps/_search', {
        'suggest': {
          'peepsSuggest': {
            'prefix': term,
            'completion': {
              'field': 'name'
            }
          }
        },
      }).pipe(
        map(data => {
          return data.suggest.peepsSuggest[0].options.map(o => o.text)
        }),
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      );
  }

}
