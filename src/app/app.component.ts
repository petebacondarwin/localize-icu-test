import { Component } from '@angular/core';
import IntlMessageFormat from 'intl-messageformat';

function formatIcu(icu: string) {
  const msg = new IntlMessageFormat(icu, $localize.locale);
  return (context: any) => msg.format(context);
}

const someICUMessage = formatIcu($localize`{count, plural, =0 {none} =1 {one} other {more}}`);

@Component({
  selector: 'app-root',
  template: `
    <div i18n>{{count}} - {count, plural, =0 {none} =1 {one} other {more}}</div>

    <button (click)="count = count + 1">+1</button>
    <button (click)="count = count - 1">-1</button>

    <pre>{{message}}</pre>
  `,
})
export class AppComponent {
  count = 0;


  get message() {
    return someICUMessage(this);
  }
}
