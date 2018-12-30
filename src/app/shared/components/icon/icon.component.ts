import { Component, Input } from '@angular/core';

import './icon-manifest';

@Component({
  selector: 'svg[icon]',
  template: `<svg:use [attr.xlink:href]="'#' + type"></svg:use>`,
  host: {
    viewBox: '0 0 20 20',
    class: 'dib v-mid',
    width: '1em',
    height: '1em',
  },
})
export class IconComponent {
  @Input() type: string;
  @Input() className: string;
}