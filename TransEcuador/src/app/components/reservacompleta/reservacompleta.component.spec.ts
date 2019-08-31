import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacompletaComponent } from './reservacompleta.component';

describe('ReservacompletaComponent', () => {
  let component: ReservacompletaComponent;
  let fixture: ComponentFixture<ReservacompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservacompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
