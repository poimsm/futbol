import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isA = true;
  isB = false;
  isC = false;

  constructor() { }

  ngOnInit() {
  }

  change(letra) {
    if (letra == 'A') {
      this.isA = true;
      this.isB = false;
      this.isC = false;
    }
    if (letra == 'B') {
      this.isA = false;
      this.isB = true;
      this.isC = false;
    }
    if (letra == 'C') {
      this.isA = false;
      this.isB = false;
      this.isC = true;
    }
  }
}
