import { Component } from '@angular/core';
import * as $ from 'jquery';
// declare const initialize: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myweb';
  ngOnInit (){
    console.log('initialize')
    // initialize();
  }
}
