import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = '';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(this.serverStatus);
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getServerColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
