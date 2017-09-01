import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus:  string = 'offline';
    allowNewServer  = false;
    serverCreationStatus: String = 'no server crated';
    serverName:string  = 'Test server';
    serverCreated = false;
    servers = ['test serve 1','test server 2'];
    
    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },3000);

      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    }

    getServerStatus () {
        return this.serverStatus;
    }

    onCreateServer (){
        this.serverCreationStatus = 'new server created ' + this.serverName;
        this.serverCreated = true;
    }

    onUpdateServerName(event: Event){
        
        this.serverName = (<HTMLInputElement>event.target).value;
        
    }

    getColor (){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}