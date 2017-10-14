import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'mn-capacity-filter',
  template: `
    <div class="filter capacity-filter"
         [ngClass]="{'applied': filterCapacity > 1,
                     'active': isInputFocused}"
         (click)="focusInput()">
      <span class="filter-label">{{ filterLabel }}</span>
      <div class="capacity-wrapper">
        <input type="number"
               min="1"
               max="108"
               [(ngModel)]="filterCapacity"
               (focus)="toggleInputFocus()"
               (blur)="toggleInputFocus()"
               class="capacity-amount"
               #capacityInput/>
        <i class="filter-icon fa fa-user-o"></i>
      </div>
    </div>
  `,
  styleUrls: ['./capacity-filter.component.scss', '../../styles/filters.scss']
})
export class CapacityFilterComponent {
  filterLabel = 'Min Capacity';
  filterCapacity = 1;
  isInputFocused = false;

  @ViewChild('capacityInput') capacityInput: any;

  focusInput(): void {
    this.capacityInput.nativeElement.focus();
  }

  toggleInputFocus(): void {
    this.isInputFocused = !this.isInputFocused;
  }
}
