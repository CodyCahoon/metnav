import {Component} from '@angular/core';

@Component({
  selector: 'mn-filter-bar',
  template: `
    <div class="filter-bar">
      <mn-time-filter></mn-time-filter>
      <mn-capacity-filter></mn-capacity-filter>
      <mn-availability-filter [filterType]="0" [isApplied]="true"></mn-availability-filter>
      <mn-availability-filter [filterType]="1" [isApplied]="false"></mn-availability-filter>
    </div>
  `,
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  isApplied = true;
}
