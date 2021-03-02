import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit, OnChanges {

  @Input('usersData') usersData: Array<any>;
  @Output('userInfoChange')
  userInfoChange = new EventEmitter()
  shownData = [];
  currentindex = 0;
  currentLength = 3;
  constructor() { }

  ngOnInit(): void {
    console.log(this.usersData, this.shownData);
  }

  ngOnChanges() {
    this.upDateShownData();
  }


  upDateShownData() {
    this.shownData = this.usersData.slice(this.currentindex, this.currentindex + this.currentLength);

  }
  shift(direction: string) {
    if (direction && direction === "left") {
      let val = this.currentindex - 3;
      if (
        val < 0
      ) {
        this.currentindex = (val) + this.usersData.length;
        this.shownData = this.usersData.slice(this.currentindex, this.currentindex + this.currentLength);
      }
      else {
        this.currentindex = (val) % this.usersData.length;
        this.shownData = this.usersData.slice(this.currentindex, this.currentindex + this.currentLength);
      }


    } else {
      this.currentindex = (this.currentindex + this.currentLength) % this.usersData.length;
      this.shownData = this.usersData.slice(this.currentindex, this.currentindex + this.currentLength);
    }
  }

  emitChanges(val: string) {
    this.userInfoChange.emit(val)
  }

}

