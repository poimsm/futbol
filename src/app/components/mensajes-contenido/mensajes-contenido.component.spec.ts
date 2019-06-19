import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesContenidoComponent } from './mensajes-contenido.component';

describe('MensajesContenidoComponent', () => {
  let component: MensajesContenidoComponent;
  let fixture: ComponentFixture<MensajesContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajesContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
