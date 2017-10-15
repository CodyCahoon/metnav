import {animate, Component, Input, OnInit, style, transition, trigger} from '@angular/core';
import {ISearchResult} from '../../model/ISearchResult';
import {Room} from '../../../core/model/Room';
import {RoomStatus} from '../../../core/model/RoomStatus';

@Component({
  selector: 'mn-search-result',
  template: `
    <div class="search-result" [@fadeInOut]>
      <mn-search-result-status [status]="room.status"></mn-search-result-status>
      <mn-search-result-info [room]="room"></mn-search-result-info>
      <mn-search-result-availability [availability]="roomAvailability"></mn-search-result-availability>
    </div>
  `,
  styleUrls: ['./search-result.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate(200, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(0)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SearchResultComponent implements OnInit {
  @Input() room: Room;
  roomAvailability: string;

  ngOnInit(): void {
    this.roomAvailability = '10:00am to 12:00pm';
  }

}
