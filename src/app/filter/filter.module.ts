import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AvailabilityFilterComponent} from './components/availability-filter/availability-filter.component';
import {CapacityFilterComponent} from './components/capacity-filter/capacity-filter.component';
import {DateFilterComponent} from './components/date-filter/date-filter.component';
import {FilterBarComponent} from './components/filter-bar/filter-bar.component';
import {TimeFilterComponent} from './components/time-filter/time-filter.component';

@NgModule({
  declarations: [
    AvailabilityFilterComponent,
    CapacityFilterComponent,
    DateFilterComponent,
    FilterBarComponent,
    TimeFilterComponent
  ],
  exports: [
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class FilterModule {
}
