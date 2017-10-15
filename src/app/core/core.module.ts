import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {GenerateRoomsService} from './services/generate-rooms.service';
import {OutlookService} from './services/outlook.service';
import {SearchService} from './services/search.service';

@NgModule({
  declarations: [

  ],
  exports: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GenerateRoomsService,
    OutlookService,
    SearchService
  ]
})
export class CoreModule {
}
