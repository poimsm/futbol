import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  showMatch = true;

  constructor(
    private router: Router,
    private _control: ControlService
    ) { }

  ngOnInit() {
  }

 

  openConent() {
    this._control.openPage('mensaje', 'modal');
    this.router.navigateByUrl('mensaje');
  }

}
