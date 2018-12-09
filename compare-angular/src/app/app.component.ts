import { Component } from '@angular/core';

@Component({ // component decorator
  // series of properties that configure this given component
  selector: 'app-root',
  templateUrl: './app.component.html', // external html properties
  styleUrls: ['./app.component.sass']  // external styles properties
})
export class AppComponent { // this is where all the logic goes (dependency injections, methods)
  toggleNav=false;
}
