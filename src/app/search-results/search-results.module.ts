import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SearchResultAvailabilityComponent} from '../search-results/components/search-result-availability/search-result-availability.component';
import {SearchResultComponent} from '../search-results/components/search-result/search-result.component';
import {SearchResultInfoComponent} from '../search-results/components/search-result-info/search-result-info.component';
import {SearchResultListComponent} from '../search-results/components/search-result-list/search-result-list.component';
import {SearchResultStatusComponent} from '../search-results/components/search-result-status/search-result-status.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    SearchResultAvailabilityComponent,
    SearchResultComponent,
    SearchResultInfoComponent,
    SearchResultListComponent,
    SearchResultStatusComponent
  ],
  exports: [
    SearchResultAvailabilityComponent,
    SearchResultComponent,
    SearchResultInfoComponent,
    SearchResultListComponent,
    SearchResultStatusComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ]
})
export class SearchResultsModule {
}
