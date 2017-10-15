import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {SearchBarComponent} from '../search-bar/components/search-bar/search-bar.component';
import {SearchButtonComponent} from '../search-bar/components/search-button/search-button.component';
import {SearchFieldComponent} from '../search-bar/components/search-field/search-field.component';

import {SearchService} from '../core/services/search.service';

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchButtonComponent,
    SearchFieldComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchBarModule {
}
