import {animate, Component, style, transition, trigger} from '@angular/core';

@Component({
  selector: 'mn-dock-bar',
  template: `
    <div class="dock-bar" [@slideIn]>
      <mn-dock-brand></mn-dock-brand>
      <mn-filter-bar></mn-filter-bar>
      <mn-search-bar></mn-search-bar>
    </div>
  `,
  styleUrls: ['./dock-bar.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({
          transform: 'translateY(-100%)'
        }),
        animate(200, style({
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class DockBarComponent {

}
