import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [`./app.component.css`]
//   styles: [`
//   h3 {
//     color: blue;
//   }
//   `]
})
export class AppComponent {
  // title = 'first angular-base';
  // name = 'pale-cinder';
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
 }

