import {Component, Input} from '@angular/core';
import {ISearchResult} from '../../model/ISearchResult';

@Component({
  selector: 'mn-search-result-availability',
  template: `
    <div class="search-result-availability">
      <span class="search-result-header">{{ searchResult.availabilityMessage }}</span>
    </div>
  `,
  styleUrls: ['./search-result-availability.component.scss']
})
export class SearchResultAvailabilityComponent {
  @Input() searchResult: ISearchResult;
}
