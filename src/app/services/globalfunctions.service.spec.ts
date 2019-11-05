import { TestBed } from '@angular/core/testing';

import { GlobalfunctionsService } from './globalfunctions.service';

describe('GlobalfunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalfunctionsService = TestBed.get(GlobalfunctionsService);
    expect(service).toBeTruthy();
  });
});
