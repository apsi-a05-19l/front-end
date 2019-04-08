import {ProjectDetailsModel} from '../models/project-details.model';

export const mockProjectDetails: ProjectDetailsModel[] = [
  {
    id: 1,
    name: 'DripSens',
    currentLeader: 'Krzysztof Apolinarski',
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
    currentLeader: 'Agnieszka Dąbrowska',
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
    currentLeader: 'Daniel Marczak',
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
