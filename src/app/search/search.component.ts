import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
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
  selectionIndex = -1;
  suggestions: string[];

  constructor(private searchService: SearchService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(state => state.search.suggestions).subscribe(s => {
      this.suggestions = s;
    });
  }

  onUp() {
    if (this.selectionIndex > -1) {
      this.selectionIndex--;
    }
  }

  onDown() {
    if (this.selectionIndex < this.suggestions.length - 1) {
      this.selectionIndex++;
    }
  }

  onMouse(index) {
    this.selectionIndex = index;
  }

  onEnter() {
  }

  onKeyUp(terms: string) {
    this.store.dispatch(new KeyTyped(terms));
  }

}
