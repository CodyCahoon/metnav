import {Component} from '@angular/core';
import {ISearchResult} from '../../model/ISearchResult';
import {SearchResultStatus} from '../../model/SearchResultStatus';

@Component({
  selector: 'mn-search-result-list',
  template: `
    <section class="search-result-list">
      <div class="search-result" *ngFor="let searchResult of searchResults">
        <mn-search-result [searchResult]="searchResult"></mn-search-result>
      </div>
    </section>
  `,
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {

  searchResults = this.getSearchResults();

  getSearchResults(): Array<ISearchResult> {
    const searchResults: Array<ISearchResult> = [];
    for (let i = 0; i < 25; i++) {
      searchResults.push(<ISearchResult>{
        name: 'Huddle Room',
        location: '01.407',
        status: this.getSearchResultStatus(),
        availabilityMessage: '10:00am - 12:00pm'
      });
    }
    return searchResults;
  }

  private getSearchResultStatus(): SearchResultStatus {
    const rand = Math.random();
    if (rand < 0.25) {
      return SearchResultStatus.Available;
    } else if (rand < 0.5) {
      return SearchResultStatus.Reserved;
    } else if (rand > 0.75) {
      return SearchResultStatus.Person;
    } else {
      return SearchResultStatus.Unknown;
    }

  }
}
