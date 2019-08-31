import { TestBed } from '@angular/core/testing';

import { AsientoService } from './asiento.service';

describe('AsientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsientoService = TestBed.get(AsientoService);
    expect(service).toBeTruthy();
  });
});
