import {Reservation} from './Reservation';
import {RoomLocation} from './RoomLocation';
import {RoomStatus} from './RoomStatus';

import * as _ from 'lodash';

/**
 * Represents a room in a building
 */
export class Room {

  /**
   * Creates a new Room object
   * @param {string} name The name of the room
   * @param {RoomLocation} location The location of the room in the building
   * @param {Array<Reservation>} reservations The reservations for this room
   */
  constructor(public name: string,
              public location: RoomLocation,
              public status: RoomStatus,
              public reservations: Array<Reservation>) {

  }

  getDisplayString(): string {
    const roomPadded = _.padStart(this.location.roomNumber.toString(), 3, '0');
    return `0${this.location.floor}.${roomPadded}`;
  }
}
