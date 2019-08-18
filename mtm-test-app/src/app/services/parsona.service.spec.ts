import { TestBed } from '@angular/core/testing';

import { ParsonaService } from './parsona.service';

describe('ParsonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsonaService = TestBed.get(ParsonaService);
    expect(service).toBeTruthy();
  });
});
