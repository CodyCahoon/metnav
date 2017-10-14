import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AvailabilityFilterComponent} from './components/availability-filter/availability-filter.component';
import {CapacityFilterComponent} from './components/capacity-filter/capacity-filter.component';
import {FilterBarComponent} from './components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AvailabilityFilterComponent,
    CapacityFilterComponent,
    FilterBarComponent
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
