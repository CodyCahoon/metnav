import {Employee} from './Employee';

/**
 * Represents a Reservation for a Room
 */
export class Reservation {

  /**
   * Creates a new Reservation object
   * @param {Date} startTime When reservation begins
   * @param {Date} endTime When the reservation ends
   * @param {Employee} owner Who owns the reservation
   */
  constructor(public startTime: Date,
              public endTime: Date,
              public owner: Employee) {

  }
}

