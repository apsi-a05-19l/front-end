import { Injectable } from '@angular/core';
import {ProjectDetailsModel} from '../models/project-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  fetchProject(projectId: number): Promise<ProjectDetailsModel> {
    const projectsToReturn: ProjectDetailsModel[] = [
      {
        id: 1,
        name: 'DripSens',
        reports: [
          {
            id: 1,
            text: 'First DripSens report',
            author: 'Krzysztof Apolinarski'
          },
          {
            id: 2,
            text: 'Second DripSens report',
            author: 'Krzysztof Apolinarski'
          }
        ]
      },
      {
        id: 2,
        name: 'Prąd do serca',
        reports: [
          {
            id: 1,
            text: 'First Prąd do serca report',
            author: 'Agnieszka Dąbrowska'
          },
          {
            id: 2,
            text: 'Second Prąd do serca report',
            author: 'Agnieszka Dąbrowska'
          }
        ]
      },
      {
        id: 3,
        name: 'Gods Eye',
        reports: [
          {
            id: 1,
            text: 'First Gods Eye report',
            author: 'Daniel Marczak'
          },
          {
            id: 2,
            text: 'Second Gods Eye report',
            author: 'Daniel Marczak',
          }
        ]
      }
    ];
    const projectToReturn: ProjectDetailsModel = projectsToReturn.filter(project => project.id === projectId)[0];
    return Promise.resolve(projectToReturn);
  }
}
