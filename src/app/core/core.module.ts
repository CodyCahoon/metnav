import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SearchService} from './services/search.service';

@NgModule({
  declarations: [

  ],
  exports: [
    SearchService
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SearchService
  ]
})
export class CoreModule {
}
