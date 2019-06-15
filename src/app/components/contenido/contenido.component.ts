import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  constructor(private _control: ControlService) { }

  comprar() {
    this._control.showBuyNow = !this._control.showBuyNow;
  }
  ngOnInit() {
  }

}
