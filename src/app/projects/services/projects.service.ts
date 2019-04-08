import { Injectable } from '@angular/core';
import {ProjectModel} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  fetchProjectsList(): Promise<ProjectModel[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'DripSens',
      },
      {
        id: 2,
        name: 'Prąd do serca',
      },
      {
        id: 3,
        name: 'Gods Eye',
      }
    ]);
  }
}
