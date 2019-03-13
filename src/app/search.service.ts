import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, flatMap, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from './SearchResult';
import {BankAccount} from './BankAccount';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(terms: Observable<string>): Observable<BankAccount[]> {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchEntries(term))
    );
  }

  searchEntries(term): Observable<BankAccount[]> {
    let observable = this.http
      .get<SearchResult>('http://localhost:9200/bank/_search').pipe(
        map(data => {
          return data.hits.hits.map(hit => hit._source);
        }),
        catchError((err) => {
          console.error(err);
          return of(err);
        })
      );
    return observable;
  }

}
