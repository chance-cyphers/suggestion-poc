import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Subject} from 'rxjs';
import {BankAccount} from '../BankAccount';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  results: BankAccount[]

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        console.log("accts: " + results.length)
        this.results = results;
      });
  }

  ngOnInit() {
  }

}
