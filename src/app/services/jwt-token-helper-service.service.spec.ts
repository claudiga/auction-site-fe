import { TestBed } from '@angular/core/testing';

import { JwtTokenHelperServiceService } from './jwt-token-helper-service.service';

describe('JwtTokenHelperServiceService', () => {
  let service: JwtTokenHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
