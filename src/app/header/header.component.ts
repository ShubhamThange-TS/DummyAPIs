import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = "default";
  userName: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {

    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user') && val.url.includes('user')) {
          console.warn(" In User Area")
          this.menuType = "user";
          if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore)[0];
            this.userName = userData.FirstName;
          }
        } else {
          console.warn("Outside User")
          this.menuType = "default"
        }
      }
    });
  }
  Logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
}
