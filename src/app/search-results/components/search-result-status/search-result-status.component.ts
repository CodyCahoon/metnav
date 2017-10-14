import {Component, Input} from '@angular/core';
import {SearchResultStatus} from '../../model/SearchResultStatus';

@Component({
  selector: 'mn-search-result-status',
  template: `
    <div class="search-result-status-wrapper">
            <span class="search-result-status"
                  [ngClass]="{'available': isAvailable(status),
                                'reserved': isReserved(status),
                                'person': isPerson(status),
                                'unknown': isUnknown(status)}">
            </span>
    </div>
  `,
  styleUrls: ['./search-result-status.component.scss']
})
export class SearchResultStatusComponent {

  @Input() status: SearchResultStatus;

  isAvailable(status: SearchResultStatus): boolean {
    return this.isStatus(status, SearchResultStatus.Available);
  }

  isReserved(status: SearchResultStatus): boolean {
    return this.isStatus(status, SearchResultStatus.Reserved);
  }

  isPerson(status: SearchResultStatus): boolean {
    return this.isStatus(status, SearchResultStatus.Person);
  }

  isUnknown(status: SearchResultStatus): boolean {
    return this.isStatus(status, SearchResultStatus.Unknown);
  }

  private isStatus(status: SearchResultStatus, expectedStatus: SearchResultStatus): boolean {
    return status === expectedStatus;
  }
}
