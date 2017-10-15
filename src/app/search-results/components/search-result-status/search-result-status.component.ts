import {Component, Input} from '@angular/core';
import {RoomStatus} from '../../../core/model/RoomStatus';

@Component({
  selector: 'mn-search-result-status',
  template: `
    <div class="search-result-status-wrapper">
            <span class="search-result-status"
                  [ngClass]="{'available': isAvailable(status),
                                'reserved': isReserved(status),
                                'unknown': isUnknown(status)}">
            </span>
    </div>
  `,
  styleUrls: ['./search-result-status.component.scss']
})
export class SearchResultStatusComponent {

  @Input() status: RoomStatus;

  isAvailable(status: RoomStatus): boolean {
    return this.isStatus(status, RoomStatus.Available);
  }

  isReserved(status: RoomStatus): boolean {
    return this.isStatus(status, RoomStatus.Reserved);
  }

  isUnknown(status: RoomStatus): boolean {
    return this.isStatus(status, RoomStatus.Unknown);
  }

  private isStatus(status: RoomStatus, expectedStatus: RoomStatus): boolean {
    return status === expectedStatus;
  }
}
