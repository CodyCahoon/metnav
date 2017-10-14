import {Component} from '@angular/core';

@Component({
  selector: 'mn-capacity-filter',
  template: `
    <div class="filter capacity-filter">
      <span class="filter-label">{{ filterLabel }}</span>
      <div class="capacity-wrapper">
        <i class="filter-icon fa fa-user-o"></i>
        <input type="number"
               min="0"
               max="108"
               [ngModel]="filterCapacity"
               class="capacity-amount"/>
      </div>
    </div>
  `,
  styleUrls: ['./capacity-filter.component.scss', '../styles/filters.scss']
})
export class CapacityFilterComponent {
  filterLabel = 'Capacity';
  filterCapacity = 10;
}
