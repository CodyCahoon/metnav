import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mn-dock-bar></mn-dock-bar>
    <mn-search-result-list></mn-search-result-list>
  `
})
export class AppComponent {
  title = 'app';
}
