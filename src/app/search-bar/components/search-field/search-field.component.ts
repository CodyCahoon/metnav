import {Component} from '@angular/core';
import {SearchService} from '../../../core/services/search.service';

@Component({
  selector: 'mn-search-field',
  template: `
    <input type="text"
           class="search-field"
           [(ngModel)]="searchField"
           (keyup)="updateSearchField()"/>
  `,
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  searchField = '';

  constructor(private searchService: SearchService) {

  }

  updateSearchField(): void {
    this.searchService.setSearchField(this.searchField);
  }
}
