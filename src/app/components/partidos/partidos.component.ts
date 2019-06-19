import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  constructor(
    private _control:ControlService,
    private router: Router
  ) { }

  ngOnInit() {
    this._control.openPage('partidos', 'page');
  }

  openPartido() {
    this._control.openPage('partido', 'modal');
    this.router.navigateByUrl('partido');
  }

}
