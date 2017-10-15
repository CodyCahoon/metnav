import {animate, Component, Input, style, transition, trigger} from '@angular/core';
import {ISearchResult} from '../../model/ISearchResult';

@Component({
  selector: 'mn-search-result',
  template: `
    <div class="search-result" [@fadeInOut]>
      <mn-search-result-status [status]="searchResult.status"></mn-search-result-status>
      <mn-search-result-info [searchResult]="searchResult"></mn-search-result-info>
      <mn-search-result-availability [searchResult]="searchResult"></mn-search-result-availability>
    </div>
  `,
  styleUrls: ['./search-result.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        }),
        animate(200, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(0)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class SearchResultComponent {
  @Input() searchResult: ISearchResult;
}
