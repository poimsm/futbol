import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPublicoComponent } from './juego-publico.component';

describe('JuegoPublicoComponent', () => {
  let component: JuegoPublicoComponent;
  let fixture: ComponentFixture<JuegoPublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoPublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
