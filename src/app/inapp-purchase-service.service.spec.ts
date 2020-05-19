import { TestBed } from '@angular/core/testing';

import { InappPurchaseServiceService } from './inapp-purchase-service.service';

describe('InappPurchaseServiceService', () => {
  let service: InappPurchaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InappPurchaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
