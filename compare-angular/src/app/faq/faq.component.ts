import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {
  
  faqs: Array<any>;
 private results: Observable<faqs[]>;

  constructor(private http: HttpClient) { 
    this.http.get('http://jsonplaceholder.typicode.com/posts')
    // .map(response => response.json())
    //.subscribe (res => this.faqs = res);
  }



  ngOnInit() {
  }

}
