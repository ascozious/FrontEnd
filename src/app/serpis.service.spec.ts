import { TestBed, inject } from '@angular/core/testing';

import { SerpisService } from './serpis.service';

describe('SerpisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerpisService]
    });
  });

  it('should be created', inject([SerpisService], (service: SerpisService) => {
    expect(service).toBeTruthy();
  }));
});
