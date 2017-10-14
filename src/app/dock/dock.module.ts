import {BrowserModule} from '@angular/platform-browser';
import {FilterModule} from '../filter/filter.module';
import {NgModule} from '@angular/core';
import {SearchBarModule} from '../search-bar/search-bar.module';

import {DockBarComponent} from './components/dock-bar/dock-bar.component';
import {DockBrandComponent} from './components/dock-brand/dock-brand.component';

@NgModule({
  declarations: [
    DockBarComponent,
    DockBrandComponent
  ],
  exports: [
    DockBarComponent
  ],
  imports: [
    BrowserModule,
    FilterModule,
    SearchBarModule
  ]
})
export class DockModule {
}
