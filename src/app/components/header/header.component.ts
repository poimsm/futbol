import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activoA = true;
  activoB = false;
  activoC = false;

  addApp = false;


  constructor() { }

  activarBloque(letra) {
    if (letra == 'A') {
      this.activoA = true;
      this.activoB = false;
      this.activoC = false;
    }

    if (letra == 'B') {
      this.activoA = false;
      this.activoB = true;
      this.activoC = false;
    }

    if (letra == 'C') {
      this.activoA = false;
      this.activoB = false;
      this.activoC = true;
    }
    console.log(this.activoA);
    

  }

  ngOnInit() {
  }

}
