import {Component} from '@angular/core';

@Component({
  selector: 'mn-time-filter',
  template: `
    <div class="filter time-filter">
      <span class="filter-label">{{ filterLabel }}</span>
      <div class="capacity-wrapper">
        <input type="time"
               class="time-amount"
               [(ngModel)]="time"
               #timeInput/>
        <i class="filter-icon fa fa-clock-o"></i>
      </div>
    </div>
  `,
  styleUrls: ['./time-filter.component.scss', '../../styles/filters.scss']
})
export class TimeFilterComponent {
  filterLabel = 'Start Time';
  time = new Date();
}
