import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {DockModule} from './dock/dock.module';
import {NgModule} from '@angular/core';
import {SearchResultsModule} from './search-results/search-results.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DockModule,
    SearchResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
