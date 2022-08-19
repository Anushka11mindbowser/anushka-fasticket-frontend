import { TestBed } from '@angular/core/testing';

import { IndivisualShowsService } from './indivisual-shows.service';

describe('IndivisualShowsService', () => {
  let service: IndivisualShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndivisualShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
