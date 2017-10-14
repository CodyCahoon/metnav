import {Component} from '@angular/core';

@Component({
  selector: 'mn-search-bar',
  template: `
    <div class="search-bar">
      <mn-search-button></mn-search-button>
      <mn-search-field></mn-search-field>
    </div>
  `,
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

}
