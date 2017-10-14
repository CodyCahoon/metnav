import {Component, Input, OnInit} from '@angular/core';
import {AvailabilityFilterType} from '../../model/AvailabilityFilterType';

@Component({
  selector: 'mn-availability-filter',
  template: `
    <div class="filter {{ filterClass }}"
         [ngClass]="{'applied': isApplied}"
         (click)="toggleApplied()">
      <span class="filter-label">{{ filterLabel }}</span>
      <i class="filter-icon {{ filterIcon }}"></i>
    </div>
  `,
  styleUrls: ['./availability-filter.component.scss', '../styles/filters.scss']
})
export class AvailabilityFilterComponent implements OnInit {
  @Input() filterType: AvailabilityFilterType;
  @Input() isApplied: boolean;
  filterClass: string;
  filterLabel: string;
  filterIcon: string;

  toggleApplied(): void {
    this.isApplied = !this.isApplied;
  }

  ngOnInit(): void {
    if (this.filterType === AvailabilityFilterType.Available) {
      this.filterClass = 'available-filter';
      this.filterLabel = 'Available';
      this.filterIcon = 'fa fa-check';
    } else if (this.filterType === AvailabilityFilterType.Reserved) {
      this.filterClass = 'reserved-filter';
      this.filterLabel = 'Reserved';
      this.filterIcon = 'fa fa-ban';
    }
  }
}
