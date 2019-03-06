import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      // every second it's increasing by 5
      this.progress = this.progress + 5;
    }, 1000)
  }

}
