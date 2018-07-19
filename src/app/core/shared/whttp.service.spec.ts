import { TestBed, inject } from '@angular/core/testing';

import { WhttpService } from './whttp.service';

describe('WhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhttpService]
    });
  });

  it('should be created', inject([WhttpService], (service: WhttpService) => {
    expect(service).toBeTruthy();
  }));
});
