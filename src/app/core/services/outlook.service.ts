import {Injectable} from '@angular/core';
import {Room} from '../model/Room';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {GenerateRoomsService} from './generate-rooms.service';

@Injectable()
export class OutlookService {
  rooms = new Subject<Array<Room>>();

  constructor(private generateRoomsService: GenerateRoomsService) {
    this.initRooms();
  }

  getRooms(): Observable<Array<Room>> {
    return this.rooms.asObservable();
  }

  test() {
    return this.generateRoomsService.generateRooms();
  }

  private initRooms() {
    const test = this.generateRoomsService.generateRooms();
    this.rooms.next(test);
  }

}
