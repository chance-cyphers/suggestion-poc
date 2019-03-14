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
  selectionIndex = -1;

  constructor(private searchService: SearchService) {
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

  ngOnInit() {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }

  onMouse(index) {
    this.selectionIndex = index;
  }
}
