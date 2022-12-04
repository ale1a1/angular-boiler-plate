import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serversGroupName = '';
  currentUserName = '';
  isUserNameEmpty = true;
  isServerCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push('server');
    console.log(this.servers);
  }
  // onUpdateServersGroupName(event: Event) {
  //   this.serversGroupName = (<HTMLInputElement>event.target).value;
  //   console.log(event.target);
  // }
  onUpdateUserName() {
    if (this.currentUserName.length >= 1) this.isUserNameEmpty = false;
  }

  resetUserName() {
    this.currentUserName = '';
  }
}
