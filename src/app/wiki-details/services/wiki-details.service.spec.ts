import { TestBed } from '@angular/core/testing';

import { WikiDetailsService } from './wiki-details.service';

describe('WikiDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiDetailsService = TestBed.get(WikiDetailsService);
    expect(service).toBeTruthy();
  });
});
