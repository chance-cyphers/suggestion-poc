import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPillComponent } from './search-filter-pill.component';

describe('SearchFilterPillComponent', () => {
  let component: SearchFilterPillComponent;
  let fixture: ComponentFixture<SearchFilterPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
