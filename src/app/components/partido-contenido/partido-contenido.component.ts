import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partido-contenido',
  templateUrl: './partido-contenido.component.html',
  styleUrls: ['./partido-contenido.component.css']
})
export class PartidoContenidoComponent implements OnInit {

  constructor(
    private _control:ControlService,
    private router: Router
  ) { }

  ngOnInit() {
    this._control.openPage('partido', 'modal');
  }

}
