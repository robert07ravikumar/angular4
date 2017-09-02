import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.css']
})
export class TestRouteComponent implements OnInit {

  nameToDisplay = '';

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.nameToDisplay = this.route.snapshot.params.userName;
  }

}
