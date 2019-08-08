import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: {}[] = [
    {
      name: 'Production #2 Server',
      status: 'Online'
    },
    {
      name: 'Testing Server',
      status: 'Offline'
    },
    {
      name: 'Production #1 Server',
      status: 'Online'
    }
  ];
}
