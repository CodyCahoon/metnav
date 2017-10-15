import {OfficeLocation} from './OfficeLocation';

export class RoomLocation {

  public floorAndRoomStr: string;

  constructor(public location: OfficeLocation,
              public building: number,
              public floor: number,
              public roomNumber: number) {
    this.floorAndRoomStr = `0${this.floor}.${this.roomNumber}`;

  }
}
