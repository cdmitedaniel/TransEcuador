import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrutaComponent } from './adminruta.component';

describe('AdminrutaComponent', () => {
  let component: AdminrutaComponent;
  let fixture: ComponentFixture<AdminrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
