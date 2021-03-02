import { Injectable } from '@angular/core';
// import {HttpModule} from ''
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://api.github.com/users";
  constructor() { }

  getUsers() {
    return fetch(this.url).then(data => data.json())
  }
}
