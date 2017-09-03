import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-sample',
  templateUrl: './ng-if-sample.component.html',
  styleUrls: ['./ng-if-sample.component.css']
})
export class NgIfSampleComponent implements OnInit {

  visible = true;
  counter = 0 ;
  myFavLang = {
    'frontend' : ['html','css','javascript'],
    'backend' : ['java','scala','python']
  };

  constructor() { }

  ngOnInit() {
  }

  toggleDiv(){
    this.visible = !this.visible;
    this.counter++;
  }

}
