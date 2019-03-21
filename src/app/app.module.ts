import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {searchReducer} from './store/search.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffects} from './store/search.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SearchFilterPillComponent} from './search-filter-pill/search-filter-pill.component';
import {MatChipsModule} from '@angular/material/chips';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFilterPillComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({search: searchReducer}),
    EffectsModule.forRoot([SearchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
