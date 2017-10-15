import {Reservation} from './Reservation';

/**
 * Represents a room in a building
 */
export class Room {

  /**
   * Creates a new Room object
   * @param {string} name The name of the room
   * @param {string} location The location of the room in the building
   * @param {Array<Reservation>} reservations The reservations for this room
   */
  constructor(public name: string,
              public location: string,
              public reservations: Array<Reservation>) {

  }
}
