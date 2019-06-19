import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoContenidoComponent } from './partido-contenido.component';

describe('PartidoContenidoComponent', () => {
  let component: PartidoContenidoComponent;
  let fixture: ComponentFixture<PartidoContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
