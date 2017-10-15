import {Component, Input} from '@angular/core';

@Component({
  selector: 'mn-search-result-availability',
  template: `
    <div class="search-result-availability">
      <span class="search-result-header">{{ availability }}</span>
    </div>
  `,
  styleUrls: ['./search-result-availability.component.scss']
})
export class SearchResultAvailabilityComponent {
  @Input() availability: string;
}
