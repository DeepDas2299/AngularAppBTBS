import { TestBed } from '@angular/core/testing';

import { JourneyMainService } from './journey-main.service';

describe('JourneyMainService', () => {
  let service: JourneyMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourneyMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
