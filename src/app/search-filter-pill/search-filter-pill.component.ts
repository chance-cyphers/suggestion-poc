import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-filter-pill',
  templateUrl: './search-filter-pill.component.html',
  styleUrls: ['./search-filter-pill.component.css']
})
export class SearchFilterPillComponent implements OnInit {

  @Input() filter: string;

  constructor() { }

  ngOnInit() {
  }

}
