import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent {


  allowNewServer = false;
  serverCreationStatus= "No server was created";
  ServerName ='Test Server';

  constructor(){
    setTimeout( ()=>{
      this.allowNewServer=true;
    },2000)

    
  }
  onCreateServer(){
    this.serverCreationStatus="server is created the name is "+ this.ServerName;
  }
  // onvalueupdate(event :Event){
  //   console.log("event--->",event)
  //   this.userInput = (<HTMLInputElement>event.target).value;

  // }
}
