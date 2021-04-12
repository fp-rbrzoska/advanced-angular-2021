import { TestBed } from '@angular/core/testing';

import { TwittwerService } from './twittwer.service';

describe('TwittwerService', () => {
  let service: TwittwerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwittwerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
