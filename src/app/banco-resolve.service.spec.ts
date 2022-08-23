import { TestBed } from '@angular/core/testing';

import { BancoResolveService } from './banco-resolve.service';

describe('BancoResolveService', () => {
  let service: BancoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
