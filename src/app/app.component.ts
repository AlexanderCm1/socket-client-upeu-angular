import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/WebsocketService/web-socket-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'socketClient';
  input = "";

  constructor(public messageService: WebsocketService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
  

}
