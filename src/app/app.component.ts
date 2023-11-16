import { Component } from '@angular/core';
import {UsersdataService} from './services/usersdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api';
  users: any;
  constructor(private userData:UsersdataService)
  {
  userData.users().subscribe((data) =>{
  console.warn("data",data);
  this.users=data;
  });
}
}
