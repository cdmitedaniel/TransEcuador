import { TestBed } from '@angular/core/testing';

import { PagoService } from './pago.service';

describe('AsientoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagoService = TestBed.get(PagoService);
    expect(service).toBeTruthy();
  });
});
