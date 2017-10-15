import {Injectable} from '@angular/core';
import {Room} from '../model/Room';
import {RoomLocation} from '../model/RoomLocation';
import {OfficeLocation} from '../model/OfficeLocation';

import * as _ from 'lodash';
import {RoomStatus} from '../model/RoomStatus';

@Injectable()
export class GenerateRoomsService {

  generateRooms(): Array<Room> {
    const numRooms = 100;
    const rooms: Array<Room> = [];
    for (let i = 0; i < numRooms; i++) {
      rooms.push(this.generateRoom(i + 1));
    }
    return rooms;
  }

  private generateRoom(index: number): Room {
    const building = Math.random() > 0.5 ? 1 : 2;
    const floor = Math.floor(Math.random() * 7 + 1);
    let names = ['Huddle Room', 'Conference Room Long Name', 'Collaborate Room'];
    const location = new RoomLocation(OfficeLocation.Cary, building, floor, index);
    names = _.shuffle(names);
    return new Room(names[0], location, this.generateStatus(), []);
  }

  private generateStatus() {
    const rand = Math.random();
    if (rand < 0.33) {
      return RoomStatus.Available;
    } else if (rand < 0.66) {
      return RoomStatus.Reserved;
    } else {
      return RoomStatus.Unknown;
    }
  }

}
