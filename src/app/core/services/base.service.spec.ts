import { TestBed } from '@angular/core/testing';

import { baseService } from './base.service';

describe('ProductService', () => {
  let service: baseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(baseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
