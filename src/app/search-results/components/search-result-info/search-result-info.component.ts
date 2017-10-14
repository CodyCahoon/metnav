import {Component, Input} from '@angular/core';
import {ISearchResult} from '../../model/ISearchResult';

@Component({
  selector: 'mn-search-result-info',
  template: `
    <div class="search-result-info">
      <h1 class="search-result-header">{{ searchResult.name }}</h1>
      <h2 class="search-result-detail">{{ searchResult.location }}</h2>
    </div>
  `,
  styleUrls: ['./search-result-info.component.scss']
})
export class SearchResultInfoComponent {
  @Input() searchResult: ISearchResult;
}
