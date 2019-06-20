import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos = [];

  constructor(
    private _control:ControlService,
    private router: Router,
    private _data: DataService
  ) { 
    _data.getPartidos().then((partidos: any) => {
      this.partidos = partidos;      
    })
  }

  ngOnInit() {
    this._control.openPage('partidos', 'page');
  }

  openPartido(id) {
    this._control.openPage('partido', 'modal');
    this.router.navigateByUrl(`partido/${id}`);
  }

}
