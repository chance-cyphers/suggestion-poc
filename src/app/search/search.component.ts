import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  results: string[];

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  ngOnInit() {
  }

}
