import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Store} from '@ngrx/store';
import {DownArrow, KeyTyped, MouseOverSuggestion, UpArrow} from '../store/search.action';
import {AppState} from '../app.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  selectionIndex: number;
  suggestions: string[];

  constructor(private searchService: SearchService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(state => state.search).subscribe(s => {
      this.suggestions = s.suggestions;
      this.selectionIndex = s.selectionIndex;
    });
  }

  onUp() {
    this.store.dispatch(new UpArrow());
  }

  onDown() {
    this.store.dispatch(new DownArrow());
  }

  onMouse(index) {
    this.store.dispatch(new MouseOverSuggestion(index));
  }

  onEnter() {
  }

  onKeyUp(terms: string) {
    this.store.dispatch(new KeyTyped(terms));
  }

}
