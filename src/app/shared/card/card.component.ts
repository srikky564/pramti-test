import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('userInfo') userInfo: any;
  @Output()
  userInfoDataChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfo);
  }

  changeUser(userUrl: string) {

    this.userInfoDataChange.emit(userUrl)

  }

}
