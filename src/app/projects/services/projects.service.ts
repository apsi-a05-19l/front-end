import { Injectable } from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {mockProjects} from '../mock-data/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  fetchProjectsList(): Promise<ProjectModel[]> {
    return Promise.resolve(mockProjects);
  }
}
