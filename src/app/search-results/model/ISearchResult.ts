import {SearchResultStatus} from './SearchResultStatus';

export interface ISearchResult {
  name: string;
  location: string;
  status: SearchResultStatus,
  availabilityMessage?: string
}
