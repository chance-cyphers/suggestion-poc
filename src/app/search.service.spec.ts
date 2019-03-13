import {TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';

describe('SearchService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', (done) => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();

    service.searchEntries('psad').subscribe((results) => {
      // console.log('results: ' + results);
      done();
    });
  });
});
