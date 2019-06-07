import { TestBed } from '@angular/core/testing';

import { AmiiboService } from './amiibo.service';

describe('AmiiboService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmiiboService = TestBed.get(AmiiboService);
    expect(service).toBeTruthy();
  });
});
