import { TestBed } from '@angular/core/testing';

import { ColorMindService } from './color-mind.service';

describe('ColorMindService', () => {
  let service: ColorMindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorMindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
