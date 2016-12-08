import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello you this is my first {{name}} page</h1>`,
})
export class AppComponent  { name = 'Angular'; }

