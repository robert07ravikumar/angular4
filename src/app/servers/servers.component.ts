import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  // selector: '[app-servers]',
  selector : '.app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverStatus: string = 'offline';
  constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

      getColor (){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}
