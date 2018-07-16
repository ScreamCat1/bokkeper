import { TestBed, inject } from '@angular/core/testing';

import { MonthSpentService } from './month-spent.service';

describe('MonthSpentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthSpentService]
    });
  });

  it('should be created', inject([MonthSpentService], (service: MonthSpentService) => {
    expect(service).toBeTruthy();
  }));
});
