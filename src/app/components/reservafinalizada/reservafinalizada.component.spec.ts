import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservafinalizadaComponent } from './reservafinalizada.component';

describe('ReservafinalizadaComponent', () => {
  let component: ReservafinalizadaComponent;
  let fixture: ComponentFixture<ReservafinalizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservafinalizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservafinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
