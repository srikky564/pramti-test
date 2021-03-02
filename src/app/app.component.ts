import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pramati-test';
  users = [];
  selectedUser: any
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUsers().then(data => {
      if (data && data.length > 0) {
        console.log("data recieved ", data)
        this.users = data;
        this.selectedUser = this.users[0].avatar_url;
      }
    }
    )

  }

  userInfoChange(e: any) {
    if (e) {
      this.selectedUser = e
    }

  }
}
