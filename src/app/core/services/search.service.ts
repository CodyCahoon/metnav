import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class SearchService {

  private searchField: string;

  setSearchField(newSearchField: string) {
    if (!_.isEqual(this.searchField, newSearchField)) {
      this.searchField = newSearchField;
    }
  }

  getSearchField(): string {
    return this.searchField;
  }


}
