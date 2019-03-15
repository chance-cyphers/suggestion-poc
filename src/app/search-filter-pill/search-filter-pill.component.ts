import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {RemoveFilter} from '../store/search.action';

@Component({
  selector: 'app-search-filter-pill',
  templateUrl: './search-filter-pill.component.html',
  styleUrls: ['./search-filter-pill.component.css']
})
export class SearchFilterPillComponent implements OnInit {

  @Input() filter: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  remove() {
    this.store.dispatch(new RemoveFilter(this.filter));
  }
}
