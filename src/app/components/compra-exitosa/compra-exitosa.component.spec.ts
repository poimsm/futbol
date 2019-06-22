import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraExitosaComponent } from './compra-exitosa.component';

describe('CompraExitosaComponent', () => {
  let component: CompraExitosaComponent;
  let fixture: ComponentFixture<CompraExitosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraExitosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
