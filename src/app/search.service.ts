import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './SearchResult';
import {ReceiveSuggestions} from './store/search.action';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchEntries(term): Observable<ReceiveSuggestions> {
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
          let suggestions = data.suggest.peepsSuggest[0].options.map(o => o.text);
          return new ReceiveSuggestions(suggestions);
        }),
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      );
  }

}
