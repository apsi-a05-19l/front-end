import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('WikiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });
});
