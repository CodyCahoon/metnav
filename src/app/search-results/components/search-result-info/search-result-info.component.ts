import {Component, Input, ViewChild} from '@angular/core';
import {Room} from '../../../core/model/Room';

@Component({
  selector: 'mn-search-result-info',
  template: `
    <div class="search-result-info"
         (mouseenter)="enterName()"
         (mouseleave)="exitName()">
      <h1 class="search-result-header"
          #roomName>{{ room.name }}</h1>
      <h2 class="search-result-detail">{{ room.getDisplayString() }}</h2>
    </div>
  `,
  styleUrls: ['./search-result-info.component.scss']
})
export class SearchResultInfoComponent {
  @Input() room: Room;
  @ViewChild('roomName') roomName: any;
  roomNameMax = 18;

  enterName() {
    if (this.room.name.length > this.roomNameMax) {
      this.roomName.nativeElement.style.textOverflow = 'clip';
    }
  }

  exitName() {
    if (this.room.name.length > this.roomNameMax) {
      this.roomName.nativeElement.style.textOverflow = 'ellipsis';
    }
  }
}
