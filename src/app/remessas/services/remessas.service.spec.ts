import { TestBed } from '@angular/core/testing';

import { RemessasService } from './remessas.service';

describe('RemessasService', () => {
  let service: RemessasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemessasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
