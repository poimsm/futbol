import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recintos',
  templateUrl: './recintos.component.html',
  styleUrls: ['./recintos.component.css']
})
export class RecintosComponent implements OnInit {
  list = [1,2,3,4,5]
  constructor() { }

  ngOnInit() {
  }

}
