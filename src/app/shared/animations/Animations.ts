import {animate, state, style, transition, trigger} from '@angular/animations';

export const openClose =
  trigger('openClose', [
  state('open', style({
    overflow: 'hidden'
  })),
  state('closed', style({
    height: '0px',
    overflow: 'hidden'
  })),
  transition('open <=> closed', [
    animate('.3s ease-in')
  ]),
]);
