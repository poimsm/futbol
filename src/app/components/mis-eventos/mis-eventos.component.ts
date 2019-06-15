import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {
  list = [1,2,3];
  showShare = false;
  constructor(
    private router: Router,
    private _control:ControlService) { }

  openContent() {
    this.router.navigateByUrl('/contenido');
    this._control.isUser = false;
  }

  ngOnInit() {
  }

}
