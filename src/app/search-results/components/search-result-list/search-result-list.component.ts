import {Component} from '@angular/core';
import {OutlookService} from '../../../core/services/outlook.service';
import {Room} from '../../../core/model/Room';

@Component({
  selector: 'mn-search-result-list',
  template: `
    <section class="search-result-list">
      <div class="search-result"
           *ngFor="let room of rooms">
        <mn-search-result [room]="room"></mn-search-result>
      </div>
    </section>
  `,
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {
  rooms: Array<Room>;

  constructor(private outlookService: OutlookService) {
    this.rooms = this.outlookService.test();
    this.outlookService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }
}
