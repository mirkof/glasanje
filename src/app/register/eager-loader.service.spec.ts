import { TestBed } from '@angular/core/testing';

import { EagerLoaderService } from './eager-loader.service';

describe('EagerLoaderService', () => {
  let service: EagerLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EagerLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
