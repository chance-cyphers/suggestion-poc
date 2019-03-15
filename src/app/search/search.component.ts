import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Observable, Subject} from 'rxjs';
import {SearchState} from '../store/search.state';
import {Store} from '@ngrx/store';
import {KeyTyped} from '../store/search.action';
import {AppState} from '../app.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  results: string[];
  selectionIndex = -1;
  someState$: Observable<string>;

  constructor(private searchService: SearchService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.someState$ = this.store.select(state => state.search.words);
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  onUp() {
    if (this.selectionIndex > -1) {
      this.selectionIndex--;
    }
  }

  onDown() {
    if (this.selectionIndex < this.results.length - 1) {
      this.selectionIndex++;
    }
  }

  onMouse(index) {
    this.selectionIndex = index;
  }

  onEnter() {
    this.store.dispatch(new KeyTyped());
  }

}
