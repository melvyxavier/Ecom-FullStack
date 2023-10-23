import { TestBed } from '@angular/core/testing';

import { EkartserviceService } from './ekartservice.service';

describe('EkartserviceService', () => {
  let service: EkartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
