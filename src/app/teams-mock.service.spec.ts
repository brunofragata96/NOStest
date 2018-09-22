import { TestBed } from '@angular/core/testing';

import { TeamsMockService } from './teams-mock.service';

describe('TeamsMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsMockService = TestBed.get(TeamsMockService);
    expect(service).toBeTruthy();
  });
});
